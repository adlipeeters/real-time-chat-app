import MainLayout from "../layouts/MainLayout"
import Sidebar from "../components/Sidebar"
import ProtectedRoutes from "../components/ProtectedRoutes"
import AuthOverlay from "../components/AuthOverlay"
import ProfileSettings from "../components/ProfileSettings"
import RoomList from "../components/RoomList"
import { Flex } from "@mantine/core"
import AddChatroom from "../components/AddChatroom"
import JoinRoomOrChatwindow from "../components/JoinRoomOrChatwindow"
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
function Home() {
    const [opened, { open, close }] = useDisclosure(false);
    const isMediumDevice = useMediaQuery("(max-width: 992px)");
    let roomList;

    if (isMediumDevice) {
        roomList = <>
            <Button onClick={open}>Choose Room</Button>
            <Drawer opened={opened ? opened : false} onClose={close} title="">
                <RoomList open={open} close={close} opened={opened} />
            </Drawer>
        </>
    } else {
        roomList = <RoomList open={open} close={close} opened={opened} />
    }

    return (
        <MainLayout>
            <div
                style={{
                    position: "absolute",
                    width: '100%'
                }}
            >
                <AuthOverlay />
                <ProfileSettings />
                <Sidebar />
                <div style={{ display: 'flex', marginLeft: '100px' }}>
                    <ProtectedRoutes>
                        <AddChatroom />
                        <Flex direction={{ base: "column", md: "row" }} justify={'space-between'} style={{ width: '100%' }}>
                            {/* <Button onClick={open}>Open Drawer</Button> */}
                            {roomList}
                            {/* <Drawer opened={opened ? opened : false} onClose={close} title="Authentication">
                                asdas
                            </Drawer>
                            <RoomList opened={opened} open={open} close={close} /> */}
                            <JoinRoomOrChatwindow />
                        </Flex>
                    </ProtectedRoutes>
                </div>
            </div>
        </MainLayout>
    )
}

export default Home