import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import { TextField, Typography , Stack, Box, DialogTitle as MuiDialogTitle, styled} from '@mui/material';

const validationSchema = Yup.object({
  businessName: Yup.string().required('Business name is required'),
  businessCategory: Yup.string().required('Business category is required'),
  businessAddress: Yup.string().required('Business address is required'),
  contactName: Yup.string().required('Contact name is required'),
  contactEmail: Yup.string().email('Invalid email address').required('Contact email is required'),
  contactPhone: Yup.string().required('Contact phone number is required'),
});

export const BusinessButtonForm = ({ handleClose, open }) => {

  const DialogTitle = styled(MuiDialogTitle )(()=>({
    fontFamily:" BR Firma",
    fontSize:" 20px",
    fontWeight: "600",
    lineHeight:" 28px",
    letterSpacing: "-0.10000000149011612px",
    textAlign: "center"
  }));

  const handleSubmit = (values) => {
    console.log(values);
    handleClose();
  };

  return (
    <Formik
      initialValues={{
        businessName: '',
        businessCategory: '',
        businessAddress: '',
        contactName: '',
        contactEmail: '',
        contactPhone:'',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Stack spacing={2} sx={{height:"550px"}}>
            <DialogTitle>Add new Business</DialogTitle>
            <DialogContent>
              <Box sx={{height: "65px"}}>
                <Typography variant='h3'>Business name</Typography>
                 <Box sx={{marginTop:"1px"}}>
                 <Field
                  as={TextField}
                  name="businessName"
                  placeholder='jerry hoilday'
                  fullWidth
                  size='small'
                />
                {errors.businessName && touched.businessName && (
                  <Typography color="error" variant='h3'>{errors.businessName}</Typography>
                )}
                 </Box>
              </Box>
              <Box sx={{height: "65px"}}>
                <Typography variant='h3'>Business category</Typography>
                <Box sx={{marginTop:"2px"}}>
                <Field
                  as={TextField}
                  name="businessCategory"
                  placeholder='real estate'
                  fullWidth
                  size='small'
                />
                {errors.businessCategory && touched.businessCategory && (
                  <Typography color="error" variant='h3'>{errors.businessCategory}</Typography>
                )}
                </Box>
              </Box>
              <Box sx={{height: "65px"}}>
                <Typography variant='h3'>Business address</Typography>
                 <Box sx={{marginTop:"1px"}}>
                 <Field
                  as={TextField}
                  name="businessAddress"
                  placeholder='31 osgifolaring str'
                  fullWidth
                  size='small'
                />
                {errors.businessAddress && touched.businessAddress && (
                  <Typography color="error" variant='h3'>{errors.businessAddress}</Typography>
                )}
                 </Box>
              </Box>
              <Box sx={{height: "65px"}}>
                <Typography variant='h3'>Contact's name </Typography>
                 <Box sx={{marginTop:"1px"}}>
                 <Field
                  as={TextField}
                  name="contactName"
                  placeholder='jerry hoilday'
                  fullWidth
                  size='small'
                />
                {errors.contactName && touched.contactName && (
                  <Typography color="error" variant='h3'>{errors.contactName}</Typography>
                )}
                 </Box>
              </Box>
              <Box sx={{height: "65px"}}>
                <Typography variant='h3'>Contact's email </Typography>
                 <Box sx={{marginTop:"1px"}}>
                 <Field
                  as={TextField}
                  name="contactEmail"
                  placeholder='jerry hoilday'
                  fullWidth
                  size='small'
                  required
                />
                {/* {errors.contactEmail && touched.contactEmail && (
                  <Typography color="error" variant='h3'>{errors.contactEmail}</Typography>
                )} */}
                 </Box>
              </Box>
              <Box sx={{height: "65px"}}>
                <Typography variant='h3'>Contact's phone no</Typography>
                 <Box sx={{marginTop:"1px"}}>
                 <Field
                  as={TextField}
                  name="contactPhone"
                  placeholder='jerry hoilday'
                  fullWidth
                  size='small'
                />
                {errors.contactPhone && touched.contactPhone && (
                  <Typography color="error" variant='h3'>{errors.contactPhone}</Typography>
                )}
                 </Box>
              </Box>
              
              {/* Add other fields similarly */}

              <Box sx={{marginTop:"20px"}}>
                <Button sx={{textTransform:"none"}}  type="submit" color="primary" variant="contained" fullWidth> Add Business</Button>
              </Box>
            </DialogContent>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
