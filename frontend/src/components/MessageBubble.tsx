import React from "react"
import { Message } from "../gql/graphql"
import {
  Avatar,
  Flex,
  Image,
  Paper,
  Text,
  useMantineTheme,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

interface MessageProps {
  message: Message
  currentUserId: number
}

const MessageBubble: React.FC<MessageProps> = ({ message, currentUserId }) => {
  const theme = useMantineTheme()
  if (!message?.user?.id) return null
  const isSentByCurrentUser = message.user.id === currentUserId

  const isMediumDevice = useMediaQuery("(max-width: 992px)");

  return (
    <Flex
      justify={isSentByCurrentUser ? "flex-end" : "flex-start"}
      align={"center"}
      m={"md"}
      mb={10}
      style={{ padding: '0px', margin: '0px' }}
    >
      {!isSentByCurrentUser && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <span style={{ textAlign: 'center', fontSize: '13px' }}>
            {message.user.fullname.length > 7 ? message.user.fullname.slice(0, 7) + '...' : message.user.fullname}
          </span>
          <Avatar
            radius={"xl"}
            src={message.user.avatarUrl || null}
            alt={message.user.fullname}
          />
        </div>
      )}
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <Paper
          p="md"
          style={{
            marginLeft: isSentByCurrentUser ? 0 : 10,
            marginRight: isSentByCurrentUser ? 10 : 0,
            backgroundColor: isSentByCurrentUser
              ? theme.colors.blue[6]
              : "#f1f1f1",
            color: isSentByCurrentUser ? "#fff" : "inherit",
            borderRadius: 10,
            marginTop: '15px',
          }}
        >
          {message.content}
          {message.imageUrl && (
            <Image
              width={isMediumDevice ? "100" : '250'}
              height={isMediumDevice ? "100" : '250'}
              fit="cover"
              src={"http://localhost:3000/" + message.imageUrl}
              alt="Uploaded content"
            />
          )}

          <Text
            style={
              isSentByCurrentUser ? { color: "#e0e0e4" } : { color: "gray" }
            }
          >
            <span style={{ fontSize: '11px' }}>{new Date(message.createdAt).toLocaleString()}</span>
          </Text>
        </Paper>
      </Flex>
      {isSentByCurrentUser && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
          <Avatar
            radius={"xl"}
            src={message.user.avatarUrl || null}
            alt={message.user.fullname}
          />
          <span style={{ textAlign: 'center', fontSize: '13px' }}>Me</span>
        </div>
      )}
    </Flex>
  )
}

export default MessageBubble