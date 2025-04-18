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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // New state for thank you message
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.WEB3FORMS_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true); // Start loading state
    console.log(apiKey);
    // Validation: Check if any field is empty
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill out all fields before submitting.");
      setIsLoading(false); // Reset loading state
      return;
    }

    // Validation: Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      setIsLoading(false); // Reset loading state
      return;
    }

    // Validation: Check if phone number contains only digits
    const phoneRegex = /^[0-9]{10}$/; // Ensures exactly 10 digits
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit contact number.");
      setIsLoading(false); // Reset loading state
      return;
    }

    try {
      const form = new FormData();

      // Append form data for submission
      form.append("access_key", apiKey);
      form.append("subject", "New Contact Form Submission");
      form.append("from_name", "Shree Ansh Agarbatti Co.");
      form.append("to_name", "Shree Ansh Agarbatti Co.");
      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("message", formData.message);

      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      let data;
      try {
        data = await response.json(); // Parse JSON response
      } catch (jsonError) {
        throw new Error("Invalid JSON response from the server.");
      }

      if (data.success) {
        setIsSubmitted(true); // Show success message
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        // Reset isSubmitted state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Error: " + data.message); // Show error message from API
      }
    } catch (error) {
      alert("An error occurred while submitting the form. Please try again.");
      console.error("Form submission error:", error); // Log error for debugging
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  return (
    <>
      <Box py={3} px={4} className="lg:mx-20 md:mx-16 sm:mx-8 mx-4">
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
          <Grid
            marginY={2}
            paddingX={2}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
          >
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

        {isSubmitted ? ( // Conditionally render thank you message
          <Typography variant="h5" className="text-center text-green-600">
            Thank you for contacting us! We will get back to you soon.
          </Typography>
        ) : (
          <Grid
            container
            className="flex justify-center items-center max-w-md mx-auto p-4 gap-4"
          >
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mobile Number"
                variant="outlined"
                value={formData.phone}
                onChange={(event) =>
                  setFormData({ ...formData, phone: event.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                value={formData.message}
                onChange={(event) =>
                  setFormData({ ...formData, message: event.target.value })
                }
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} className="text-center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Submitting..." : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
      <Box pb={3} px={4} className="lg:mx-20 md:mx-16 sm:mx-8 mx-4 h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.47556535159924!2d83.3671638606144!3d26.33915615107661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39917791a09a80bd%3A0x9900a17a6a00a2e7!2sSHREE%20ANSH%20AGARBATTI%20CO.!5e0!3m2!1sen!2sin!4v1744866210038!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="rounded-md"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default ContactUs;
