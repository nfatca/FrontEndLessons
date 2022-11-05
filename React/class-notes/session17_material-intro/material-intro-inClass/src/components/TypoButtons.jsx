import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h6"
          align="center"
          color="error"
          mt={4}
        >
          MUI Typography
        </Typography>

        <Typography
          variant="body1"
          align="justify"
          mt={4}
          sx={{ background: "lightgreen", color: "#aaa", fontSize: "1.3rem" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          voluptatem voluptas quam reiciendis repellendus ducimus. Voluptatibus
          fugiat nemo nostrum dignissimos.
        </Typography>
        <Typography
          variant="button"
          sx={{ display: "inline-block", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sunt
          consequuntur soluta aut perferendis. Laudantium accusantium optio
          nihil, iste excepturi in aperiam. Officiis voluptatum id animi vitae
          ut distinctio doloribus?
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            // width: "50%",
            alignItems: "center",
          }}
        >
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default TypoButtons;
