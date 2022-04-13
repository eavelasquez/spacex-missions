import { Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";
import { HiCalendar } from "react-icons/hi";
import dayjs from "dayjs";
import "dayjs/locale/en";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex>
        <Text fontSize="2xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag
          p={2}
          size="sm"
          colorScheme={launch.launch_success ? "green" : "red"}
        >
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>

      <Flex align="center">
        <Icon as={HiCalendar} color="gray.500" />
        <Text fontSize="sm" ml={2} color="gray.500">
          {dayjs(launch.launch_date_local).locale("en").format("MMMM DD, YYYY")}
        </Text>
      </Flex>

      <Button mt={4} colorScheme="purple">
        Launch Details
      </Button>
    </Box>
  );
}
