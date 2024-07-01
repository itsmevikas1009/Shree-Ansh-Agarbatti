// import * as React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
// import { styled } from "@mui/material/styles";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "New Message from Shree Ansh Agarbatti";
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const mailtoLink = `mailto:shreeansh26@gmail.com?subject=${subject}&body=${encodeURIComponent(
      body
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <Grid
      container
      className="flex justify-center items-center max-w-md mx-auto p-4 gap-4"
    >
      <Grid item xs={12} className="text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
      </Grid>
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
  );
};

export default ContactUs;
