import { Box, Stack, useRadioGroup } from "@chakra-ui/react";
import { RadioButtonComponent } from "../../../shared/ui";
import { TodoStatus } from "../../../entities/todo/model/types";
import { useTodoState } from "../../../entities/todo/hooks/useTodoState";

export const RadioGroupFilter = () => {
  const options: TodoStatus[] = [
    TodoStatus.ALL,
    TodoStatus.ACTIVE,
    TodoStatus.COMPLETED,
  ];
  const { filter, setFilter } = useTodoState();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "todofilter",
    value: filter,
    onChange: (val: TodoStatus) => setFilter(val),
  });

  const group = getRootProps();

  return (
    <Box {...group}>
      <Stack direction="row">
        {options.map((option) => {
          const radio = getRadioProps({ value: option });

          return (
            <RadioButtonComponent key={option} {...radio}>
              {option}
            </RadioButtonComponent>
          );
        })}
      </Stack>
    </Box>
  );
};
