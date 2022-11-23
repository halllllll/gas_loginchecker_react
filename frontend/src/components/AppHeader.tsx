import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  styled
} from '@mui/material'

const HeaderStyle = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  color: 'primary'
}))

type HeaderProps = {
  title: string
}
const Header = (props: HeaderProps) => {
  return (
    <>
      <header>
        <HeaderStyle>
          <Container maxWidth="md" disableGutters>
            <Toolbar
              variant="dense"
              sx={{
                m: 2,
                display: 'flex'
              }}
            >
              <Typography
                variant="h3"
                color="inherit"
                component="h1"
                sx={{
                  flexGrow: 1,
                  fontSize: 36,
                  fontWeightLight: 300,
                  fontWeightRegular: 400,
                  fontWeightMedium: 700
                }}
              >
                {props.title}
              </Typography>
            </Toolbar>
          </Container>
        </HeaderStyle>
      </header>
      <Box
        sx={{
          marginBottom: 16
        }}
      />
    </>
  )
}

export default Header
