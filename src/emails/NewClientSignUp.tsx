import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NewClientSignUpEmailProps {
  name: string;
  email: string;
  message: string;
}

export const NewClientSignUpEmail = ({
  name,
  email,
  message,
}: NewClientSignUpEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <img src="" alt="" />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              New Client Form Submission
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]"></Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <p>
                <strong>Name:</strong> {name}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Message:</strong> {message && <p>{message}</p>}
              </p>
            </Text>
            <Section>
              <Row>
                <Column align="right"></Column>
                <Column align="center"></Column>
                <Column align="left"></Column>
              </Row>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]"></Section>
            <Text className="text-black text-[14px] leading-[24px]"></Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This message is intended solely for the use of the individual or
              entity to whom it is addressed, namely Social Me staff. It may
              contain confidential and/or privileged information. Any review,
              dissemination, copying, printing, or other use of this email by
              persons or entities other than the addressee is prohibited. If you
              have received this email in error, please contact the sender
              immediately and delete the material from your computer.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewClientSignUpEmail;
