import React, {useState, useCallback} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import CopyToClipBoard from 'react-copy-to-clipboard'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

type TopMessageProps = {
  userId: string
  greet: string
}

const TopMessage = (props: TopMessageProps) => {
  const { width, height } = useWindowSize()
  const [copied, setCopied] = useState<boolean>(false);
  const onCopyAction = () => {
    setCopied(true);
  }

  return (
    <>
    <Box>
      <Typography
        sx={{
          py:3,
          px:5
        }}
      >
        *これは、「Googleアカウントにログインしていたらそれが表示され、タップするとクリップボードにコピーできる」機能を示すデモであり、それ以上の意味はもちません。何を持って完成とするかが確定すれば、それに向けての実装をします。
      </Typography>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        px: 3,
        py: 3,
        mb: 1,
        direction: 'row',
        justifyContent: 'space-evenly'
      }}
    >
      <CopyToClipBoard
        text={props.userId}
        onCopy={()=>onCopyAction()}
      >
        <Typography
          variant="h5"
          sx={{
            py: 2
          }}
        >
          こんにちは、 {props.userId} さん。
        </Typography>
      </CopyToClipBoard>
      <Typography
        variant="h5"
        sx={{
          py: 2
        }}
      >
      </Typography>
      <Box
        sx={{

        }}
      >
        <Typography
          variant="h5"
        >
          {copied ? "コピーできたよ！貼り付けてみてね" : props.greet}
        </Typography>
      </Box>
    </Box>
    {copied && (<Confetti
        width={width}
        height={height}
        recycle={true}
        opacity={0.6}
        gravity={0.4}
        initialVelocityY={10}
      />)}
    </>
  )
}

export default TopMessage
