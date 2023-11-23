const dbConnection = require("@database/databaseConnection");
const { knex, dataBaseSchemas } = dbConnection();
const projectBudgetTable = `${dataBaseSchemas().data}.project_budget`;
const fiscalYearTable = `${dataBaseSchemas().data}.fiscal_year`;
const projectDeliverableTable = `${dataBaseSchemas().data}.project_deliverable`;
const contractsTable = `${dataBaseSchemas().data}.contract`;
const portfolioTable = `${dataBaseSchemas().data}.portfolio`;
const clientCodingTable = `${dataBaseSchemas().data}.client_coding`;

const findAllById = (projectId) => {
  return knex(`${projectBudgetTable} as prb`)
    .select({
      id: "prb.id",
      q1_amount: "prb.q1_amount",
      q1_recovered: "prb.q1_recovered",
      q2_amount: "prb.q2_amount",
      q2_recovered: "prb.q2_recovered",
      q3_amount: "prb.q3_amount",
      q3_recovered: "prb.q3_recovered",
      q4_amount: "prb.q4_amount",
      q4_recovered: "prb.q4_recovered",
      fiscal_year: "fy.fiscal_year",
      notes: "prb.notes",
      deliverable_name: "prd.deliverable_name",
      detail_amount: "prb.detail_amount",
      recovery_area: "port.portfolio_name",
      resource_type: "prb.resource_type",
      responsibility_centre: "cc.responsibility_centre",
      service_line: "cc.service_line",
      stob: "prb.stob",
      program_area: "cc.program_area",
      contract_id: "cntr.co_number",
      total: knex.raw("prb.q1_amount + prb.q2_amount + prb.q3_amount + prb.q4_amount"),
    })
    .leftJoin(`${fiscalYearTable} as fy`, { "prb.fiscal": `fy.id` })
    .leftJoin(`${projectDeliverableTable} as prd`, { "prb.project_deliverable_id": "prd.id" })
    .leftJoin(`${portfolioTable} as port`, { "prb.recovery_area": "port.id" })
    .leftJoin(`${contractsTable} as cntr`, { "prb.contract_id": "cntr.id" })
    .leftJoin(`${clientCodingTable} as cc`, { "prb.client_coding_id": "cc.id" })
    .where({ "prd.project_id": projectId });
};

const findById = (id) => {
  return knex``
    .select({
      id: "prb.id",
      q1_amount: "prb.q1_amount",
      q1_recovered: "prb.q1_recovered",
      q2_amount: "prb.q2_amount",
      q2_recovered: "prb.q2_recovered",
      q3_amount: "prb.q3_amount",
      q3_recovered: "prb.q3_recovered",
      q4_amount: "prb.q4_amount",
      q4_recovered: "prb.q4_recovered",
      total: knex.raw("prb.q1_amount + prb.q2_amount + prb.q3_amount + prb.q4_amount"),
      fiscal_year: knex.raw(
        "(SELECT json_build_object('value', prb.fiscal, 'label', COALESCE(fy.fiscal_year, '')))"
      ),
      notes: "prb.notes",
      deliverable_name: knex.raw(
        "(SELECT json_build_object('value', prb.project_deliverable_id, 'label', COALESCE(prd.deliverable_name, '')))"
      ),
      detail_amount: "prb.detail_amount",
      recovery_area: knex.raw(
        "(SELECT json_build_object('value', prb.recovery_area, 'label', COALESCE(port.portfolio_name, '')))"
      ),
      resource_type: knex.raw(
        "(SELECT json_build_object('value', prb.resource_type, 'label', COALESCE(prb.resource_type, '')))"
      ),
      responsibility_centre: "cc.responsibility_centre",
      service_line: "cc.service_line",
      stob: "prb.stob",
      program_area: knex.raw(
        "(SELECT json_build_object('value', prb.client_coding_id, 'label', COALESCE(cc.program_area, cc.client)))"
      ),
      contract_id: knex.raw(
        "(SELECT json_build_object('value', prb.contract_id, 'label', COALESCE(cr.co_number, '')))"
      ),
    })
    .from(`${projectBudgetTable} as prb`)
    .leftJoin(`${fiscalYearTable} as fy`, { "prb.fiscal": `fy.id` })
    .leftJoin(`${projectDeliverableTable} as prd`, { "prb.project_deliverable_id": "prd.id" })
    .leftJoin(`${contractsTable} as cr`, { "prb.contract_id": "cr.id" })
    .leftJoin(`${portfolioTable} as port`, { "prb.recovery_area": "port.id" })
    .leftJoin(`${clientCodingTable} as cc`, { "prb.client_coding_id": "cc.id" })
    .where("prb.id", id)
    .first();
};

// Update one.
const updateOne = (body, id) => {
  return knex(projectBudgetTable).where("id", id).update(body);
};

// Add one.
const addOne = (newBudget) => {
  return knex(projectBudgetTable).insert(newBudget);
};

const findProjectBudgetByFiscal = (projectId) => {
  return knex
    .select({
      fiscal_year: "fy.fiscal_year",
      id: knex.raw("row_number() OVER ()"),
      recovered_amount: knex.raw("SUM(q1_amount + q2_amount + q3_amount + q4_amount)"),
      balance_remaining: knex.raw(
        "SUM(detail_amount) - SUM(q1_amount + q2_amount + q3_amount + q4_amount)"
      ),
    })
    .sum("q1_amount as q1_amount")
    .sum("q2_amount as q2_amount")
    .sum("q3_amount as q3_amount")
    .sum("q4_amount as q4_amount")
    .sum("detail_amount as total_detail_amount")
    .from(`${projectBudgetTable} as pb`)
    .leftJoin(`${projectDeliverableTable} as pd`, { "pb.project_deliverable_id": "pd.id" })
    .join(`${fiscalYearTable} as fy`, "pd.fiscal", "fy.id")
    .where("pd.project_id", 399)
    .groupBy("fy.fiscal_year");
};

const findPortfolioBreakdown = (projectId) => {
  return knex
    .select({
      portfolio_name: "port.portfolio_name",
      recovery_amount: knex.raw("SUM(pb.detail_amount)"),
      id: knex.raw("row_number() OVER ()"),
      recovered_to_date: knex.raw(
        "SUM( CASE WHEN q1_recovered THEN q1_amount WHEN q2_recovered THEN q2_amount WHEN q3_recovered THEN q3_amount WHEN q4_recovered THEN q4_amount ELSE 0::money END )"
      ),
      balance_remaining: knex.raw(
        "SUM(detail_amount) - SUM( CASE WHEN q1_recovered THEN q1_amount WHEN q2_recovered THEN q2_amount WHEN q3_recovered THEN q3_amount WHEN q4_recovered THEN q4_amount ELSE 0::money END)"
      ),
    })
    .from(`${projectBudgetTable} as pb`)
    .leftJoin(`${projectDeliverableTable} as pd`, { "pb.project_deliverable_id": "pd.id" })
    .leftJoin(`${portfolioTable} as port`, { "pb.recovery_area": "port.id" })
    .where("pd.project_id", projectId)
    .groupBy("port.portfolio_name");
};

const findDeliverablesBreakdown = (projectId) => {
  return knex
    .select({
      deliverable_name: "pd.deliverable_name",
      recovery_amount: knex.raw("SUM(pb.detail_amount)"),
      id: knex.raw("row_number() OVER ()"),
      recovered_to_date: knex.raw(
        "SUM( CASE WHEN q1_recovered THEN q1_amount WHEN q2_recovered THEN q2_amount WHEN q3_recovered THEN q3_amount WHEN q4_recovered THEN q4_amount ELSE 0::money END )"
      ),
      balance_remaining: knex.raw(
        "SUM(detail_amount) - SUM( CASE WHEN q1_recovered THEN q1_amount WHEN q2_recovered THEN q2_amount WHEN q3_recovered THEN q3_amount WHEN q4_recovered THEN q4_amount ELSE 0::money END)"
      ),
    })
    .from(`${projectBudgetTable} as pb`)
    .leftJoin(`${projectDeliverableTable} as pd`, { "pb.project_deliverable_id": "pd.id" })
    .where("pd.project_id", projectId)
    .groupBy("pd.deliverable_name");
};

const findProjectRecoverableBreakdown = (projectId) => {
  return knex
    .select({
      id: knex.raw("row_number() OVER ()"),
      total_project_budget: knex.raw("SUM(detail_amount)"),
      total_recoverable_amount: knex.raw(`
      SUM(
        CASE
          WHEN q1_recovered THEN q1_amount
          WHEN q2_recovered THEN q2_amount
          WHEN q3_recovered THEN q3_amount
          WHEN q4_recovered THEN q4_amount
          ELSE 0::money
        END
      )
    `),
    })
    .from(`${projectBudgetTable} as pb`)
    .leftJoin(`${projectDeliverableTable} as pd`, { "pb.project_deliverable_id": "pd.id" })
    .where("pd.project_id", projectId);
};

const removeOne = (projectId) => {
  return knex(`${projectBudgetTable} as prb`).where("prb.id", projectId).del();
};

module.exports = {
  findAllById,
  findById,
  updateOne,
  addOne,
  findProjectBudgetByFiscal,
  findPortfolioBreakdown,
  findDeliverablesBreakdown,
  findProjectRecoverableBreakdown,
  removeOne,
};
