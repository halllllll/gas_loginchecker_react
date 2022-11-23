import React  from "react";
import ReactDOM from 'react-dom/client';
import { Page, AppHeader } from "./components/Index";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider, createTheme} from "@mui/material";
import { Container, Stack } from "@mui/material";

const rootElemnt = document.getElementById("app") as HTMLElement;
const root = ReactDOM.createRoot(rootElemnt);

const apptheme = createTheme({
  typography: {
    fontFamily: [
     '"Kosugi Maru"', 
     '"Noto Sans JP"', 
   ].join(','),
  }
});

root.render(
  <React.StrictMode>
    <Container>
      <ThemeProvider theme={apptheme}>
        <CssBaseline />
        <Stack>
          <AppHeader title={"ようこそ　組織　アカウントへ！"} />
          <Page />
        </Stack>
      </ThemeProvider>
    </Container>
  </React.StrictMode>
);