import { Box, Button } from "@mui/material";
import { EditForm } from "components/EditForm";
import { ReadForm } from "components/ReadForm";
import { Renderer } from "components/Renderer";
import { useFormSubmit } from "hooks/useFormSubmit";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { editFields, readFields } from "./fields";

export const ProjectRegistrationSection = ({
  query,
  userHasEditCapability,
}: {
  /* eslint "no-warning-comments": [1, { "terms": ["todo", "fixme"] }] */
  // todo Define a good type. "Any" type temporarily permitted.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: any;
  userHasEditCapability: boolean;
}) => {
  const { projectId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const { handleUpdate, Notification } = useFormSubmit();

  useEffect(() => {
    // Certain properties when lacking a value have null labels causing errors.
    if (query?.data?.data) {
      if (null === query.data.data.fiscal.label) {
        query.data.data.fiscal.label = "";
      }
      if (null === query.data.data.project_status.label) {
        query.data.data.project_status.label = "";
      }
      if (null === query.data.data.funding.label) {
        query.data.data.funding.label = "";
      }
      query.data.data.version ?? "";
    }
  }, [query]);

  let content = <></>;
  switch (editMode) {
    case false:
    default:
      content = (
        <>
          <ReadForm fields={readFields(query)} />
          {userHasEditCapability && (
            <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
              <Button variant="contained" onClick={() => setEditMode(true)}>
                Change Registration
              </Button>
            </Box>
          )}
        </>
      );
      break;
    case true:
      content = (
        <EditForm
          initialValues={query?.data?.data}
          onSubmit={async (values) => {
            return handleUpdate({
              changedValues: values,
              currentRowData: query?.data?.data,
              apiUrl: `projects/${projectId}`,
              handleEditMode: setEditMode,
              queryKeys: [`project - ${projectId}`],
              successMessage: `Changes saved successfully for project ${projectId}`,
              errorMessage: `There was an issue saving your changes for project ${projectId}`,
            });
          }}
          editFields={editFields()}
        />
      );
      break;
  }

  return (
    <>
      <Renderer isLoading={query.isLoading} component={content} />
      <Notification />
    </>
  );
};
