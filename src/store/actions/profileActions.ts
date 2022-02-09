import { SUBMIT_FORM } from '../../constants/constants';

export const profileActions = (values:any) => {
   return {
       type:SUBMIT_FORM,
       payload: values
  }
};
