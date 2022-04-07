/*!

=========================================================
* Purity UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar10 from "assets/img/avatars/avatar10.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import ProfileBgImage from "assets/img/ProfileBackground.png";
import teamsImage from "assets/img/teams-image.png";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { InvisionLogo, SlackLogo } from "components/Icons/Icons";
import { HSeparator } from "components/Separator/Separator.js";
import React, { useReducer } from "react";
import { AiFillLike, AiOutlinePlus } from "react-icons/ai";
import { FaCommentDots, FaCube, FaPenFancy, FaPlus } from "react-icons/fa";
import { IoIosStar, IoMdShareAlt, IoMdStarHalf } from "react-icons/io";
import { IoDocumentsSharp, IoEllipsisVerticalSharp } from "react-icons/io5";

const reducer = (state, action) => {
  if (action.type === "SWITCH_ACTIVE") {
    if (action.payload === "overview") {
      const newState = {
        overview: true,
        teams: false,
        projects: false,
      };
      return newState;
    } else if (action.payload === "teams") {
      const newState = {
        overview: false,
        teams: true,
        projects: false,
      };
      return newState;
    } else if (action.payload === "projects") {
      const newState = {
        overview: false,
        teams: false,
        projects: true,
      };
      return newState;
    }
  }
  return state;
};

function Teams() {
  const [state, dispatch] = useReducer(reducer, {
    overview: false,
    teams: true,
    projects: false,
  });

  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();

  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  const emailColor = useColorModeValue("gray.400", "gray.300");

  return (
    <Flex direction="column">
      <Box
        mb={{ sm: "205px", md: "75px", xl: "70px" }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        <Box
          bgImage={ProfileBgImage}
          w="100%"
          h="300px"
          borderRadius="25px"
          bgPosition="50%"
          bgRepeat="no-repeat"
          position="relative"
          display="flex"
          justifyContent="center"
        >
          <Flex
            direction={{ sm: "column", md: "row" }}
            mx="1.5rem"
            maxH="330px"
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align="center"
            backdropFilter="saturate(200%) blur(50px)"
            position="absolute"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="2px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            p="24px"
            borderRadius="20px"
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(160%)",
            }}
          >
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Avatar
                me={{ md: "22px" }}
                src={avatar4}
                w="80px"
                h="80px"
                borderRadius="15px"
              />
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight="bold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                  Esthera Jackson
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={emailColor}
                  fontWeight="semibold"
                >
                  esthera@simmmple.com
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            >
              <Button
                p="0px"
                bg="transparent"
                _hover={{ bg: "none" }}
                variant="transparent-with-icon"
              >
                <Flex
                  align="center"
                  w={{ sm: "100%", lg: "135px" }}
                  bg={state.overview ? "hsla(0,0%,100%,.7)" : null}
                  boxShadow={
                    state.overview ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)" : null
                  }
                  borderColor={state.overview ? "black" : null}
                  transition="all .5s ease"
                  borderRadius="15px"
                  justifyContent="center"
                  py="10px"
                  cursor="pointer"
                  onClick={() =>
                    dispatch({ type: "SWITCH_ACTIVE", payload: "overview" })
                  }
                >
                  <Icon as={FaCube} me="6px" />
                  <Text fontSize="xs" color={textColor} fontWeight="bold">
                    OVERVIEW
                  </Text>
                </Flex>
              </Button>
              <Button
                p="0px"
                bg="transparent"
                _hover={{ bg: "none" }}
                variant="transparent-with-icon"
              >
                <Flex
                  align="center"
                  w={{ sm: "100%", lg: "135px" }}
                  bg={state.teams ? "hsla(0,0%,100%,.7)" : null}
                  boxShadow={
                    state.teams ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)" : null
                  }
                  borderColor={state.teams ? "black" : null}
                  transition="all .5s ease"
                  borderRadius="15px"
                  justifyContent="center"
                  py="10px"
                  mx={{ lg: "1rem" }}
                  cursor="pointer"
                  onClick={() =>
                    dispatch({ type: "SWITCH_ACTIVE", payload: "teams" })
                  }
                >
                  <Icon as={IoDocumentsSharp} me="6px" />
                  <Text fontSize="xs" color={textColor} fontWeight="bold">
                    TEAMS
                  </Text>
                </Flex>
              </Button>
              <Button
                p="0px"
                bg="transparent"
                _hover={{ bg: "none" }}
                variant="transparent-with-icon"
              >
                <Flex
                  align="center"
                  w={{ sm: "100%", lg: "135px" }}
                  bg={state.projects ? "hsla(0,0%,100%,.7)" : null}
                  boxShadow={
                    state.projects ? "0px 2px 5.5px rgba(0, 0, 0, 0.06)" : null
                  }
                  borderColor={state.projects ? "black" : null}
                  transition="all .5s ease"
                  borderRadius="15px"
                  justifyContent="center"
                  py="10px"
                  cursor="pointer"
                  onClick={() =>
                    dispatch({ type: "SWITCH_ACTIVE", payload: "projects" })
                  }
                >
                  <Icon as={FaPenFancy} me="6px" />
                  <Text fontSize="xs" color={textColor} fontWeight="bold">
                    PROJECTS
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Card px="0px">
        <CardBody overflowX={{ sm: "scroll", "2xl": "hidden" }}>
          <Grid
            gap={{ sm: "50px", "2xl": "70px" }}
            templateColumns={{ sm: "repeat(12, 1fr)", lg: "repeat(12, 1fr)" }}
          >
            <Flex
              direction="column"
              mx="auto"
              align="center"
              justify="center"
              ms="20px"
            >
              <Link href="#">
                <Flex
                  justify="center"
                  align="center"
                  borderRadius="50%"
                  bg={bgButton}
                  w="62px"
                  h="58px"
                  mb="7px"
                >
                  <Icon as={FaPlus} w="16px" h="16px" color="#fff" />
                </Flex>
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Add Story
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar4} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Esthera J
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar3} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Boris U
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar2} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Tao G
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar1} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Kay R
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar5} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Tom M
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar1} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Nicole N
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar7} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Emma O
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar8} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Marie P
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar9} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Bruce M
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar10} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Sandra A
              </Text>
            </Flex>
            <Flex direction="column" mx="auto" align="center" me="20px">
              <Link
                href="#"
                border="1px solid"
                borderColor="teal.300"
                borderRadius="50%"
                mb="6px"
                p="4px"
              >
                <Avatar src={avatar1} size="md" />
              </Link>
              <Text fontSize="sm" color="gray.400" fontWeight="normal">
                Katty L
              </Text>
            </Flex>
          </Grid>
        </CardBody>
      </Card>
      <Grid
        templateColumns={{ sm: "1fr", lg: "2.1fr 1fr" }}
        templateRows="auto 1fr"
        mt="24px"
        gap="24px"
      >
        <Card alignSelf={{ lg: "flex-start", "2xl": "stretch" }}>
          <CardHeader w="100%">
            <Flex justify="space-between" align="center" w="100%">
              <Flex>
                <Box>
                  <Avatar
                    src={avatar4}
                    w="40px"
                    h="40px"
                    borderRadius="12px"
                    me="15px"
                  />
                </Box>
                <Flex direction="column">
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    Esthera Jackson
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="normal">
                    3 days ago
                  </Text>
                </Flex>
              </Flex>
              <Button variant="no-hover" bg="teal.300" p="8px 32px">
                <Flex align="center" color="#fff" justifyContent="center">
                  <Icon
                    as={AiOutlinePlus}
                    w="18px"
                    h="18px"
                    fontWeight="bold"
                    me="4px"
                  />
                  <Text fontSize="md" fontWeight="bold" mt="4px">
                    Follow
                  </Text>
                </Flex>
              </Button>
            </Flex>
          </CardHeader>
          <HSeparator my="16px" />
          <CardBody>
            <Flex direction="column">
              <Text
                color="gray.400"
                fontWeight="normal"
                fontSize="md"
                mb="24px"
              >
                Personal profiles are the perfect way for you to grab their
                attention and persuade recruiters to continue reading your CV
                because you’re telling them from the off exactly why they should
                hire you.
              </Text>
              <Image
                src={teamsImage}
                minW={{ sm: "270px" }}
                h="auto"
                borderRadius="12px"
              />
              <Flex justify="space-between" align="center" my="6px">
                <Stack spacing="20px" direction="row" my="18px">
                  <Flex align="center" color="gray.500">
                    <Icon
                      as={AiFillLike}
                      w="18px"
                      h="18px"
                      me="4px"
                      cursor="pointer"
                    />
                    <Text fontSize="md">1502</Text>
                  </Flex>
                  <Flex align="center" color="gray.500">
                    <Icon
                      as={FaCommentDots}
                      w="18px"
                      h="18px"
                      me="4px"
                      cursor="pointer"
                    />
                    <Text fontSize="md">36</Text>
                  </Flex>
                  <Flex align="center" color="gray.500">
                    <Icon
                      as={IoMdShareAlt}
                      w="18px"
                      h="18px"
                      me="4px"
                      cursor="pointer"
                    />
                    <Text fontSize="md">12</Text>
                  </Flex>
                </Stack>
                <Flex
                  align="center"
                  display={{ sm: "none", md: "flex" }}
                  direction="row"
                >
                  <AvatarGroup size="xs" me="6px">
                    <Avatar src={avatar1} />
                    <Avatar src={avatar2} />
                    <Avatar src={avatar5} />
                    <Avatar src={avatar8} />
                  </AvatarGroup>
                  <Text color="gray.500" fontWeight="normal" fontSize="sm">
                    and 30+ more
                  </Text>
                </Flex>
              </Flex>
              <HSeparator mb="26px" />
              <Flex mb="30px">
                <Box>
                  <Avatar src={avatar7} w="50px" h="50px" me="15px" />
                </Box>
                <Flex direction="column">
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    Michael Lewis
                  </Text>
                  <Text
                    color="gray.500"
                    fontWeight="normal"
                    fontSize="md"
                    mt="6px"
                    mb="14px"
                  >
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves!
                  </Text>
                  <Flex>
                    <Flex align="center" color="gray.500" me="21px">
                      <Icon
                        as={AiFillLike}
                        w="18px"
                        h="18px"
                        me="4px"
                        cursor="pointer"
                      />
                      <Text fontSize="md">3 likes</Text>
                    </Flex>
                    <Flex align="center" color="gray.500">
                      <Icon
                        as={IoMdShareAlt}
                        w="18px"
                        h="18px"
                        me="4px"
                        cursor="pointer"
                      />
                      <Text fontSize="md">2 shares</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex mb="30px">
                <Box>
                  <Avatar src={avatar10} w="50px" h="50px" me="15px" />
                </Box>
                <Flex direction="column">
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    Jessica Stones
                  </Text>
                  <Text
                    color="gray.500"
                    fontWeight="normal"
                    fontSize="md"
                    mt="6px"
                    mb="14px"
                  >
                    Society has put up so many boundaries, so many limitations
                    on what’s right and wrong that it’s almost impossible to get
                    a pure thought out. It’s like a little kid, a little boy.
                  </Text>
                  <Flex>
                    <Flex align="center" color="gray.500" me="21px">
                      <Icon
                        as={AiFillLike}
                        w="18px"
                        h="18px"
                        me="4px"
                        cursor="pointer"
                      />
                      <Text fontSize="md">10 likes</Text>
                    </Flex>
                    <Flex align="center" color="gray.500">
                      <Icon
                        as={IoMdShareAlt}
                        w="18px"
                        h="18px"
                        me="4px"
                        cursor="pointer"
                      />
                      <Text fontSize="md">1 share</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex mb="30px">
                <Box>
                  <Avatar src={avatar8} w="50px" h="50px" me="15px" />
                </Box>
                <Flex direction="column">
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    Anthony Joshua
                  </Text>
                  <Text
                    color="gray.500"
                    fontWeight="normal"
                    fontSize="md"
                    mt="6px"
                    mb="14px"
                  >
                    It's all about work ! Great ideas mean nothing if they
                    aren't realised by hungry, desiring people.
                  </Text>
                  <Flex>
                    <Flex align="center" color="gray.500" me="21px">
                      <Icon
                        as={AiFillLike}
                        w="18px"
                        h="18px"
                        me="4px"
                        cursor="pointer"
                      />
                      <Text fontSize="md">42 likes</Text>
                    </Flex>
                    <Flex align="center" color="gray.500">
                      <Icon
                        as={IoMdShareAlt}
                        w="18px"
                        h="18px"
                        me="4px"
                        cursor="pointer"
                      />
                      <Text fontSize="md">6 shares</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex align="center">
                <Box>
                  <Avatar src={avatar4} w="50px" h="50px" me="15px" />
                </Box>
                <Input
                  placeholder="Write your comment..."
                  borderRadius="15px"
                  _focus={{ borderColor: "teal.300" }}
                />
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Stack direction="column" spacing="24px">
          <Card>
            <CardHeader>
              <Flex justify="space-between" align="center" w="100%">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  Digital Marketing
                </Text>
                <Button variant="no-hover" p="0px">
                  <Menu isOpen={isOpen1} onClose={onClose1}>
                    <MenuButton onClick={onOpen1} alignSelf="flex-start">
                      <Icon
                        as={IoEllipsisVerticalSharp}
                        color="gray.400"
                        w="20px"
                        h="20px"
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Action</MenuItem>
                      <MenuItem>Another action</MenuItem>
                      <MenuItem>Something else here</MenuItem>
                    </MenuList>
                  </Menu>
                </Button>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction="column" mt="16px">
                <Text
                  color="gray.400"
                  fontWeight="normal"
                  fontSize="md"
                  mb="20px"
                >
                  A group of people who collectively are responsible for all of
                  the work necessary to produce working, validated assets.
                </Text>
                <Flex justify="space-between" align="center">
                  <Text color="gray.400">Industry:</Text>
                  <Badge p="12px 16px" borderRadius="12px">
                    MARKETING TEAM
                  </Badge>
                </Flex>
                <HSeparator my="14px" />
                <Flex justify="space-between" align="center">
                  <Text color="gray.400">Rating:</Text>
                  <Stack direction="row" spacing="2px">
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoMdStarHalf} />
                  </Stack>
                </Flex>
                <HSeparator my="14px" />
                <Flex justify="space-between" align="center">
                  <Text color="gray.400">Members:</Text>
                  <AvatarGroup size="sm">
                    <Avatar src={avatar1} />
                    <Avatar src={avatar2} />
                    <Avatar src={avatar5} />
                    <Avatar src={avatar8} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Flex justify="space-between" align="center" w="100%">
                <Text fontSize="lg" color={textColor} fontWeight="bold">
                  Design
                </Text>
                <Button variant="no-hover" p="0px">
                  <Menu isOpen={isOpen2} onClose={onClose2}>
                    <MenuButton onClick={onOpen2} alignSelf="flex-start">
                      <Icon
                        as={IoEllipsisVerticalSharp}
                        color="gray.400"
                        w="20px"
                        h="20px"
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Action</MenuItem>
                      <MenuItem>Another action</MenuItem>
                      <MenuItem>Something else here</MenuItem>
                    </MenuList>
                  </Menu>
                </Button>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction="column" mt="16px">
                <Text
                  color="gray.400"
                  fontWeight="normal"
                  fontSize="md"
                  mb="20px"
                >
                  Because it's about motivating the doers. Because I’m here to
                  follow my dreams and inspire other people to follow their
                  dreams, too.
                </Text>
                <Flex justify="space-between" align="center">
                  <Text color="gray.400">Industry:</Text>
                  <Badge p="12px 16px" borderRadius="12px">
                    DESIGN TEAM
                  </Badge>
                </Flex>
                <HSeparator my="14px" />
                <Flex justify="space-between" align="center">
                  <Text color="gray.400">Rating:</Text>
                  <Stack direction="row" spacing="2px">
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoIosStar} />
                    <Icon as={IoMdStarHalf} />
                  </Stack>
                </Flex>
                <HSeparator my="14px" />
                <Flex justify="space-between" align="center">
                  <Text color="gray.400">Members:</Text>
                  <AvatarGroup size="sm">
                    <Avatar src={avatar1} />
                    <Avatar src={avatar2} />
                    <Avatar src={avatar5} />
                    <Avatar src={avatar8} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Flex align="center">
                <SlackLogo w="34px" h="34px" me="14px" />
                <Flex direction="column">
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    Slack Meet
                  </Text>
                  <Text fontWeight="normal" color="gray.400" fontSize="sm">
                    11:00 AM
                  </Text>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%">
                <Text
                  fontWeight="normal"
                  color="gray.400"
                  fontSize="md"
                  mt="16px"
                  mb="8px"
                >
                  You have an upcoming meet for Marketing Planning
                </Text>
                <Text fontWeight="bold" color={textColor} fontSize="md">
                  Meeting ID:{" "}
                  <Text as="span" color="gray.400" fontWeight="normal">
                    902-128-281
                  </Text>
                </Text>
                <HSeparator my="14px" />
                <Flex justify="space-between" align="center">
                  <Button
                    variant="no-hover"
                    bg="teal.300"
                    p="0px 40px"
                    h="35px"
                  >
                    <Text fontSize="sm" fontWeight="bold" color="#fff">
                      JOIN
                    </Text>
                  </Button>
                  <AvatarGroup size="sm">
                    <Avatar src={avatar1} />
                    <Avatar src={avatar2} />
                    <Avatar src={avatar5} />
                    <Avatar src={avatar8} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Flex align="center">
                <InvisionLogo w="34px" h="34px" me="14px" />
                <Flex direction="column">
                  <Text fontSize="md" color={textColor} fontWeight="bold">
                    Invision
                  </Text>
                  <Text fontWeight="normal" color="gray.400" fontSize="sm">
                    04:50 PM
                  </Text>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Flex direction="column" w="100%">
                <Text
                  fontWeight="normal"
                  color="gray.400"
                  fontSize="md"
                  mt="16px"
                  mb="8px"
                >
                  You have an upcoming video call for{" "}
                  <Text as="span" color="teal.300">
                    Chakra Design
                  </Text>{" "}
                  at 04:50 PM.
                </Text>
                <Text fontWeight="bold" color={textColor} fontSize="md">
                  Meeting ID:{" "}
                  <Text as="span" color="gray.400" fontWeight="normal">
                    902-128-281
                  </Text>
                </Text>
                <HSeparator my="14px" />
                <Flex justify="space-between" align="center">
                  <Button
                    variant="no-hover"
                    bg="teal.300"
                    p="0px 40px"
                    h="35px"
                  >
                    <Text fontSize="sm" fontWeight="bold" color="#fff">
                      JOIN
                    </Text>
                  </Button>
                  <AvatarGroup size="sm">
                    <Avatar src={avatar1} />
                    <Avatar src={avatar2} />
                    <Avatar src={avatar5} />
                    <Avatar src={avatar8} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </Stack>
      </Grid>
    </Flex>
  );
}

export default Teams;
