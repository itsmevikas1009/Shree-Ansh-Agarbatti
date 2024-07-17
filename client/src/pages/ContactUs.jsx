import {
  Grid,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "New Message from Shree Ansh Agarbatti";
    const body = `Name: ${name}\nMobile Number: ${phone}\nEmail: ${email}\nMessage: ${message}`;

    const mailtoLink = `mailto:shreeansh26@gmail.com?subject=${subject}&body=${encodeURIComponent(
      body
    )}`;

    window.location.href = mailtoLink;
  };
  return (
    <Box py={4} px={4} className="lg:mx-20 md:mx-16 sm:mx-8 mx-4">
      <h1 className="text-4xl mb-8 text-center font-semibold">Contact Us</h1>
      <Grid
        container
        // spacing={4}
        className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center "
      >
        <Grid
          marginY={2}
          item
          borderRight={{
            lg: "1px solid black",
            md: "1px solid black",
            sm: "1px solid black",
          }}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          paddingX={2}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton aria-label="home">
              <PlaceOutlinedIcon fontSize="large" />
            </IconButton>
            <Typography variant="h5" gutterBottom>
              Our Office Address
            </Typography>
            <Typography variant="body1" gutterBottom>
              Shree Ansh Agarbatti Co. Gola Bazar, Gorakhpur, Uttar Pradesh
              273408 India
            </Typography>
          </Box>
        </Grid>
        <Grid
          marginY={2}
          borderRight={{ lg: "1px solid black", md: "1px solid black" }}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          paddingX={2}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton aria-label="mail">
              <MailOutlineIcon fontSize="large" />
            </IconButton>
            <Typography variant="h5" gutterBottom>
              General Enquiries
            </Typography>
            <Typography variant="body1" gutterBottom>
              shreeansh26@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid
          marginY={2}
          borderRight={{
            lg: "1px solid black",
            sm: "1px solid black",
            md: "none",
          }}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={3}
          paddingX={2}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton aria-label="phone">
              <LocalPhoneOutlinedIcon fontSize="large" />
            </IconButton>
            <Typography variant="h5" gutterBottom>
              Call Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              +91-9889733153
            </Typography>
          </Box>
        </Grid>
        <Grid marginY={2} paddingX={2} item xs={12} sm={6} md={4} lg={3} xl={3}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <IconButton aria-label="schedule">
              <ScheduleOutlinedIcon fontSize="large" />
            </IconButton>
            <Typography variant="h5" gutterBottom>
              Our Timings
            </Typography>
            <Typography variant="body1" gutterBottom>
              Mon - Sun: 10:00 AM - 07:00 PM
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        className="flex justify-center items-center max-w-md mx-auto p-4 gap-4"
      >
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(event) => setName(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mobile Number"
            variant="outlined"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            variant="outlined"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} className="text-center">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
