import React from 'react';

import CustomAlertDialog from '../../../components/@ui/CustomAlertDialog/CustomAlertDialog';

const FormFeedback = ({
  isOpenForm,
  handleCloseForm,
}) => {
  return (
    <>
      <CustomAlertDialog
        open={isOpenForm}
        onClose={handleCloseForm}
        title={'Оставить заявку'}
        variant='right'
      >
        123
      </CustomAlertDialog>
    </>
  );
};

export default FormFeedback;