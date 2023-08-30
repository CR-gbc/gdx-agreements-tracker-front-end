// libs
const _ = require("lodash");

/**
 * Groups items in a list by a specified property.
 *
 * @param   {Array}  list  - The list of items to be grouped.
 * @param   {string} group - The property name to group the items by. Default is "portfolio_name".
 * @returns {Array}        An array of objects, where each object represents a group and its associated items.
 *                         Each object has two properties: the specified 'group' property (key) and the array of items (value).
 */
const groupByProperty = (list = [], group = "portfolio_name") => {
  // Using lodash's chain function "_" to create a chainable sequence.
  // The input 'list' is wrapped in the chain and will be operated upon.
  const result = _(list)
    // Group the items in the list by the specified 'group' property.
    .groupBy(group)
    // After grouping, 'map' is used to convert the grouped items into a new format.
    .map((projects, key) => ({
      // The 'key' represents the value of the property used for grouping (e.g., portfolio_name).
      // Create an object with the 'group' property as the key (e.g., { portfolio_name: 'some_group_value' }).
      [group]: key,
      // The 'projects' represent an array containing all the items belonging to this group.
      // Add the 'projects' array as the value in the new object.
      projects,
    }))
    // 'value' is used to extract the final result from the lodash chain.
    .value();

  // Return the resulting array of grouped objects.
  return result;
};

/**
 * If a parameter filter has been selected, return only queries matching those parameters. Otherwise, return them all.
 *
 * @param {knex.queryBuilder}              queryBuilder - The query builder.
 * @param {string}                         column       - The name of the database column to filter on.
 * @param {string | number | Array | null} parameter    - The query parameter with which to filter results.
 */
const whereInArray = (queryBuilder, column, parameter) => {
  if (undefined !== parameter) {
    queryBuilder.whereIn(column, parameter.toString().split(","));
  }
};

/**
 * Gets a report with subtotals.
 *
 * EXAMPLE:
 * const reportByPortfolioWithTotals = await getReportWithSubtotals(
   report,
   totals,
   "portfolio_name"
   );
 *
 * @param   {Array}    report            - The report data.
 * @param   {Array}    subtotals         - The report subtotal data.
 * @param   {string}   propertyToGroupBy - The property to group the report data by.
 * @returns {Array<*>}                   An array of report Promise objects with subtotals added.
 */
const getReportWithSubtotals = async (report, subtotals, propertyToGroupBy) => {
  // Group the report data by the specified property
  const groupedReport = groupByProperty(report, propertyToGroupBy);

  // Use reduce to fold in subtotals for each group
  return _.reduce(
    groupedReport,
    (acc, report) =>
      getNewReportGroup({
        acc,
        report,
        subtotals,
        propertyToGroupBy,
      }),
    // initial value - empty array to hold each new report group with subtotals as they accumulate
    []
  );
};
/**
 * Adds a new report group object with the project name and subtotals.
 *
 * @param   {object}        options                   - The options object.
 * @param   {Array}         options.acc               - The accumulator array.
 * @param   {object}        options.report            - The report object.
 * @param   {object}        options.subtotals         - The subtotals object.
 * @param   {string}        options.propertyToGroupBy - The property to group by.
 * @returns {Array<object>}                           The new report group array.
 */
const getNewReportGroup = ({ acc, report, subtotals, propertyToGroupBy }) => [
  ...acc,
  {
    project_name: getProjectName(report),
    ...report,
    subtotals: getReportGroupSubtotals(report, subtotals, propertyToGroupBy),
  },
];

/**
 *
 * Get the project name from the first project in the report's projects array
 *
 * @param   {object} report The report object.
 * @returns {string}        The project name from the first project in the report's projects array.
 */
const getProjectName = (report) => report?.projects?.[0]?.project_name || "";

/**
 *
 * Get the subtotals for the report group.
 *
 * @param   {Array<*>} report            The report data.
 * @param   {Array<*>} subtotals         The report subtotal data.
 * @param   {string}   propertyToGroupBy The property to group the report data by.
 * @returns {Array<*>}                   The subtotals for the report group.
 */
const getReportGroupSubtotals = (report, subtotals, propertyToGroupBy) =>
  _.keyBy(subtotals, propertyToGroupBy)[report[propertyToGroupBy]];

module.exports = {
  getReportWithSubtotals,
  groupByProperty,
  whereInArray,
};
