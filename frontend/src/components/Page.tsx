import React, { useState, useEffect } from 'react'
import { Container, Stack, Box, CircularProgress } from '@mui/material'
import { TopMessage,Footer } from './Index'
import { getUserId } from './Api'

const Page = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [userId, setUserId] = useState('')

  const handleSetUserId = (userAccountId: string) => setUserId(userAccountId)

  useEffect(() => {
    setIsLoading(true)
    const load = async () => {
      try {
        const [userIdPromise] =
          await Promise.all([getUserId()])

        const userIdObj = JSON.parse(JSON.stringify(userIdPromise))
        if (userIdObj?.userId !== undefined) {
          handleSetUserId(userIdObj.userId)
        } else {
          handleSetUserId(' -- IDの取得に失敗しました -- ')
        }
      } catch (err) {
        throw new Error(`missed: ${err}`)
      } finally {
        setIsLoading(false)
      }
    }
    void load()
  }, [])

  const greet = 'IDをタップして、クリップボードにコピーしよう！'

  return isLoading ? (
    <Box>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <CircularProgress size="10rem" />
      </Container>
    </Box>
  ) : (
    <Container>
      <Stack direction="column" justifyContent="center">
        <TopMessage
          userId={userId}
          greet={greet}
        />
      </Stack>
      <Footer />
    </Container>
  )
}

export default Page 
