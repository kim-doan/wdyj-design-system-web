import { Story } from "@storybook/react/types-6-0";
import React from "react";
import styled from "styled-components";

import {
  Section,
  Header,
  Category,
  Title,
  Main,
  SectionTitle,
} from "../../storybook-components";

import { Table, Thead, Tr, Th, Tbody, Td } from ".";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    itemLength: {
      defaultValue: { summary: "null" },
      table: {
        type: {
          summary: "실제로 존재하지 않는 prop입니다",
          detail:
            "controls를 통해서 테이블의 길이를 가변할 수 있게 설정된 prop입니다.",
        },
      },
      description: "테이블 데이터 길이",
      control: { type: "range" },
    },
  },
};

const Template: Story = (args) => {
  const { itemLength } = args;
  const items = Array.from({ length: itemLength }).map((_, i) => (
    // eslint-disable-next-line
    <Tr key={`item-${i}`}>
      <Td>Lorem</Td>
      <Td>Ipsum</Td>
      <Td>Dolor</Td>
      <Td>Sit</Td>
    </Tr>
  ));

  return (
    <Section>
      <Header>
        <Category>Components</Category>
        <Title>Table</Title>
      </Header>
      <Main flex>
        <SectionTitle>Full Page Table</SectionTitle>
        <TableWrapper>
          <Table {...args}>
            <Thead>
              <Tr>
                <Th>Lorem</Th>
                <Th>Ipsum</Th>
                <Th>Dolor</Th>
                <Th>Sit</Th>
              </Tr>
            </Thead>
            <Tbody>{items}</Tbody>
          </Table>
        </TableWrapper>
      </Main>
    </Section>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  itemLength: 50,
  width: "100%",
  minWidth: "1600px",
  height: "100%",
};

const TableWrapper = styled.div`
  flex: 1;
  min-height: 0;
`;
