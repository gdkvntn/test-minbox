import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface RadioButtonComponentProps extends UseRadioProps {
  children: ReactNode;
}

export const RadioButtonComponent = (props: RadioButtonComponentProps) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        fontSize="sm"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "blue.600",
          color: "white",
          borderColor: "blue.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={2}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
};
