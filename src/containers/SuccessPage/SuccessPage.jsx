import { Button, Grid, Typography } from "@mui/material";

import img from '../../assets/img/emptystate.png';
// import { useSelector } from "react-redux";
import useInstructors from "../Instructors/hooks/useInstructors";

// const SocialLink = ({ href, icon }) => (
//   <Link href={href} target="_blank">
//     <IconButton size="large">
//       {icon}
//     </IconButton>
//   </Link>
// );

const SuccessPage = () => {
  const title = 'Ваша заявка принята';
  const subtitle = 'В ближайшее время мы с вами свяжемся и подтвердим занятие';

  const { handleCloseForm, params } = useInstructors();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      sx={{
        textAlign: 'center',
        height: '100%',
      }}
    >
      <img
        width={300}
        src={`${params.rootDirectory}${img}`}
        alt="Спасибо! Ваша заявка отправлена!"
      />
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body2">{subtitle}</Typography>
      <Button
        variant="contained"
        size="medium"
        onClick={handleCloseForm}
        color="primary"
        fullWidth
      >
        Спасибо
      </Button>
    </Grid>
  );
};

export default SuccessPage;