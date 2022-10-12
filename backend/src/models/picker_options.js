const dbConnection = require("../database/databaseConnection");
const { knex, dataBaseSchemas } = dbConnection();
const pickerOptions = `${dataBaseSchemas().public}.picker_options`;

// Get all.
const findAll = () => {
  return knex(pickerOptions).select(
    "id",
    "name",
    "title",
    "description",
    knex.raw(getCaseStatements()),
    "associated_form"
  );
};

// Get all by project id.
const findAllByProject = (id) => {
  return knex(pickerOptions).select(
    "id",
    "name",
    "title",
    "description",
    knex.raw(getCaseStatements(id, null)),
    "associated_form"
  );
};

// Get all by contract id.
const findAllByContract = (id) => {
  return knex(pickerOptions).select(
    "id",
    "name",
    "title",
    "description",
    knex.raw(getCaseStatements(null, id)),
    "associated_form"
  );
};

const getCaseStatements = (projectId, contractId) => {
  return `CASE
    WHEN definition ->> 'tableLookup' = 'fiscal_year' THEN (SELECT json_agg(t) FROM (SELECT id AS value ,fiscal_year AS label FROM data.fiscal_year WHERE fiscal_year IS NOT NULL) t)
    WHEN definition ->> 'tableLookup' = 'ministry' THEN (SELECT json_agg(d) FROM (SELECT  id AS value, concat(ministry.ministry_name, ' ', ministry.ministry_short_name) AS label FROM data.ministry) d)
    WHEN definition ->> 'tableLookup' = 'portfolio' THEN (SELECT json_agg(g) FROM (SELECT id AS value, concat(portfolio.portfolio_name, ' ', portfolio.portfolio_abbrev) AS label FROM data.portfolio) g)
    WHEN definition ->> 'tableLookup' = 'subcontractor' THEN (SELECT json_agg(sub) FROM (SELECT id AS value, subcontractor_name AS label FROM data.subcontractor WHERE subcontractor_name IS NOT NULL) sub)
    WHEN definition ->> 'tableLookup' = 'supplier' THEN (SELECT json_agg(sup) FROM (SELECT id AS value, supplier_name AS label FROM data.supplier WHERE supplier_name IS NOT NULL) sup)
    WHEN definition ->> 'tableLookup' = 'user_roles' THEN (SELECT json_agg(roles) FROM (SELECT id AS value, display_name AS label FROM public.roles WHERE display_name IS NOT NULL) roles)
    WHEN definition ->> 'tableLookup' = 'amendment_type' THEN (SELECT json_agg(contramend) FROM (SELECT id AS value,amendment_type_name AS label FROM data.amendment_type WHERE amendment_type_name IS NOT NULL) contramend)
    WHEN definition ->> 'tableLookup' = 'contact' THEN (SELECT json_agg(c) FROM (SELECT id AS value, concat(contact.last_name, ', ', contact.first_name) AS label FROM data.contact WHERE last_name IS NOT NULL) c)
    WHEN definition ->> 'tableLookup' = 'project' THEN (SELECT json_agg(proj) FROM (SELECT id AS value, project_number AS label FROM data.project WHERE project_number IS NOT NULL) proj)
    WHEN definition ->> 'tableLookup' = 'procurement_method' THEN (SELECT json_agg(procure) FROM (SELECT id AS value, procurement_method AS label FROM data.procurement_method WHERE procurement_method IS NOT NULL) procure)
    WHEN definition ->> 'tableLookup' = 'lesson_category' THEN (SELECT json_agg(lessoncat) FROM (SELECT id AS value, lesson_category_name AS label FROM data.lesson_category WHERE lesson_category_name IS NOT NULL) lessoncat)
    WHEN definition ->> 'tableLookup' = 'resource' THEN (SELECT json_agg(resrc) FROM (SELECT resource_id AS value, concat(resource_last_name, ', ', resource_first_name) AS label FROM data.resource WHERE resource_last_name IS NOT NULL) resrc)
    WHEN definition ->> 'tableLookup' = 'supplier_rate' THEN (SELECT json_agg(suprate) FROM (SELECT sr.id AS value, concat(rt.resource_type, ' ', sr.competency, ' - ', sr.rate)  AS label FROM data.supplier_rate sr JOIN data.resource_type rt ON sr.resource_type_id = rt.id WHERE sr.rate IS NOT NULL) suprate)
    ${getClientCodingTableLookup(projectId)}
    ${getContractResourcesTableLookup(contractId)}
    ${getContractDeliverablesTableLookup(contractId)}
    WHEN definition ->> 'dropDownValues' IS NOT NULL THEN definition -> 'dropDownValues'
  END definition`;
};

const getClientCodingTableLookup = (id) => {
  let query = `SELECT 
    client_coding.id AS value, 
    COALESCE(client_coding.program_area, client_coding.client, '') AS label 
    FROM data.client_coding
    ORDER BY client_coding.program_area
    `;
  if (Number(id) > 0) {
    query = `SELECT 
      client_coding.id AS value,
      COALESCE(client_coding.program_area, client_coding.client) AS label
      FROM data.client_coding
      LEFT JOIN data.jv  on data.jv.client_coding_id = data.client_coding.id
      WHERE jv.project_id = ${Number(id)}
      GROUP BY label, value
      ORDER BY client_coding.program_area
      `;
  }
  // json_agg() returns null for empty set which breaks frontend select inputs. COALESCE to an empty array.
  return `WHEN definition ->> 'tableLookup' = 'client_coding' THEN (SELECT COALESCE(json_agg(cc), '[]') FROM (${query}) cc)`;
};

const getContractResourcesTableLookup = (id) => {
  let query = `SELECT 
    cr.id AS value,
    (r.resource_last_name || ', ' || r.resource_first_name) AS label
    FROM data.contract_resource AS cr
    LEFT JOIN data.resource AS r on cr.resource_id = r.resource_id
    ORDER BY label ASC
    `;
  if (Number(id) > 0) {
    query = `SELECT 
      cr.id AS value,
      (r.resource_last_name || ', ' || r.resource_first_name) AS label
      FROM data.contract_resource AS cr
      LEFT JOIN data.resource AS r on cr.resource_id = r.resource_id
      WHERE cr.contract_id = ${Number(id)}
      GROUP BY label, value
      ORDER BY label ASC
      `;
  }
  // json_agg() returns null for empty set which breaks frontend select inputs. COALESCE to an empty array.
  return `WHEN definition ->> 'tableLookup' = 'contract_resource' THEN (SELECT COALESCE(json_agg(conres), '[]') FROM (${query}) conres)`;
};

const getContractDeliverablesTableLookup = (id) => {
  let query = `SELECT 
    cd.id AS value,
    cd.deliverable_name AS label
    FROM data.contract_deliverable AS cd
    ORDER BY label ASC
    `;
  if (Number(id) > 0) {
    query = `SELECT 
      cd.id AS value,
      cd.deliverable_name AS label
      FROM data.contract_deliverable AS cd
      WHERE cd.contract_id = ${Number(id)}
      GROUP BY label, value
      ORDER BY label ASC
      `;
  }
  // json_agg() returns null for empty set which breaks frontend select inputs. COALESCE to an empty array.
  return `WHEN definition ->> 'tableLookup' = 'contract_deliverable' THEN (SELECT COALESCE(json_agg(condel), '[]') FROM (${query}) condel)`;
};

module.exports = {
  findAll,
  findAllByProject,
  findAllByContract,
};
