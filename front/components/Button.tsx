import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

export const ButtonComponent: React.FC<{ isLoading: boolean }> = ({
  isLoading,
  ...props
}) => {
  return (
    <Box w="80%" d="block" p="relative" m="0 auto">
      <Button
        isLoading={isLoading}
        {...props}
        mt={4}
        boxShadow="0px 8px 24px rgba(0, 0, 0, 0.15)"
        color="white"
        bg="softGreen"
        _hover={{ bg: "lightGreen", color: "darkGreen" }}
        type="submit"
        borderRadius="5px"
        h={16}
        w={"100%"}
      />
      <Flex>
        <NextLink href="/forgot-password">
          <Link mt={1} color="softGreen">
            Forgot password?
          </Link>
        </NextLink>
      </Flex>
    </Box>
  );
};

export default ButtonComponent;
