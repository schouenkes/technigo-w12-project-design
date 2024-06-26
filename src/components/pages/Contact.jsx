// This is where we create styled compontens for the Contact page
import styled from "styled-components";
import { css } from "styled-components";
import useDeviceType from "../useDeviceType";

const YellowWrapper = styled.div`
  background-color: var(--yellow);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = styled.div`
  flex: 1;
  background-color: var(--yellow);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  row-gap: 20px;

  @media (min-width: 650px) {
    row-gap: 30px;
    padding: 40px 0;
  }

  @media (min-width: 1054px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1032px;
    column-gap: 70px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
`;

// styled.a is a styled component that is an anchor tag
const IconSome = styled.a`
  color: var(--yellow);
  font-size: 2rem;
  line-height: 0;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-family: Yeseva One;
  color: #1c2996;
  font-size: 24px;
  font-weight: 400;
  line-height: 27.72px;
  text-align: center;

  @media (min-width: 1054px) {
    font-size: 32px;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  flex: 1;

  @media (min-width: 650px) {
    flex-direction: row;
    column-gap: 20px;
  }

  @media (min-width: 1054px) {
    justify-content: space-between;
  }
`;

// https://stackoverflow.com/questions/49618997/idiomatic-way-to-share-styles-in-styled-components
const ContactInfo = css`
  color: black;
  font-size: 1.5rem;
  font-family: "Lato";
  color: #1c2996;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  letter-spacing: 0.02em;
  text-align: center;

  @media (min-width: 1054px) {
    font-size: 18px;
  }
`;

const ContactLink = styled.a`
  ${ContactInfo}
  text-decoration: none;
`;

const ContactText = styled.p`
  ${ContactInfo}
`;

export const Contact = () => {
  const deviceType = useDeviceType();

  if (deviceType === "none") {
    return null;
  }

  return (
    <YellowWrapper>
      <Layout>
        <IconWrapper>
          <IconSome href="https://facebook.com">
            <svg
              width="38"
              height="39"
              viewBox="0 0 38 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Facebook</title>
              <path
                d="M19 0.459961C8.50668 0.459961 0 8.96664 0 19.46C0 28.3702 6.13472 35.8471 14.4104 37.9006V25.2664H10.4926V19.46H14.4104V16.958C14.4104 10.4912 17.3371 7.49376 23.6862 7.49376C24.89 7.49376 26.9671 7.73012 27.8168 7.96572V13.2287C27.3684 13.1816 26.5894 13.158 25.6219 13.158C22.5066 13.158 21.3028 14.3383 21.3028 17.4064V19.46H27.509L26.4427 25.2664H21.3028V38.3209C30.7108 37.1847 38.0008 29.1743 38.0008 19.46C38 8.96664 29.4933 0.459961 19 0.459961Z"
                fill="#1C2996"
              />
            </svg>
          </IconSome>
          <IconSome href="https://instagram.com">
            <svg
              width="37"
              height="39"
              viewBox="0 0 37 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <g clipPath="url(#clip0_2801_648)">
                <path
                  d="M18.5 3.88145C23.443 3.88145 24.0283 3.90371 25.9723 3.99277C27.7789 4.07441 28.7545 4.38613 29.4049 4.6459C30.2648 4.98731 30.8863 5.40293 31.5295 6.06348C32.1799 6.73145 32.5773 7.36231 32.9098 8.24551C33.1627 8.91348 33.4662 9.92285 33.5457 11.7709C33.6324 13.7748 33.6541 14.376 33.6541 19.4451C33.6541 24.5217 33.6324 25.1229 33.5457 27.1193C33.4662 28.9748 33.1627 29.9768 32.9098 30.6447C32.5773 31.5279 32.1727 32.1662 31.5295 32.8268C30.8791 33.4947 30.2648 33.9029 29.4049 34.2443C28.7545 34.5041 27.7717 34.8158 25.9723 34.8975C24.0211 34.9865 23.4357 35.0088 18.5 35.0088C13.557 35.0088 12.9717 34.9865 11.0277 34.8975C9.22109 34.8158 8.24551 34.5041 7.59512 34.2443C6.73516 33.9029 6.11367 33.4873 5.47051 32.8268C4.82012 32.1588 4.42266 31.5279 4.09023 30.6447C3.8373 29.9768 3.53379 28.9674 3.4543 27.1193C3.36758 25.1154 3.3459 24.5143 3.3459 19.4451C3.3459 14.3686 3.36758 13.7674 3.4543 11.7709C3.53379 9.91543 3.8373 8.91348 4.09023 8.24551C4.42266 7.36231 4.82734 6.72402 5.47051 6.06348C6.1209 5.39551 6.73516 4.98731 7.59512 4.6459C8.24551 4.38613 9.22832 4.07441 11.0277 3.99277C12.9717 3.90371 13.557 3.88145 18.5 3.88145ZM18.5 0.459961C13.4775 0.459961 12.8488 0.482227 10.876 0.571289C8.91035 0.660352 7.55898 0.986914 6.38828 1.45449C5.16699 1.94434 4.13359 2.59004 3.10742 3.65137C2.07402 4.70527 1.44531 5.7666 0.968359 7.01348C0.513086 8.22324 0.195117 9.60371 0.108398 11.6225C0.0216797 13.6561 0 14.3018 0 19.46C0 24.6182 0.0216797 25.2639 0.108398 27.29C0.195117 29.3088 0.513086 30.6967 0.968359 31.899C1.44531 33.1533 2.07402 34.2146 3.10742 35.2686C4.13359 36.3225 5.16699 36.9756 6.38105 37.458C7.55898 37.9256 8.90312 38.2521 10.8687 38.3412C12.8416 38.4303 13.4703 38.4525 18.4928 38.4525C23.5152 38.4525 24.1439 38.4303 26.1168 38.3412C28.0824 38.2521 29.4338 37.9256 30.6045 37.458C31.8186 36.9756 32.852 36.3225 33.8781 35.2686C34.9043 34.2146 35.5402 33.1533 36.01 31.9064C36.4652 30.6967 36.7832 29.3162 36.8699 27.2975C36.9566 25.2713 36.9783 24.6256 36.9783 19.4674C36.9783 14.3092 36.9566 13.6635 36.8699 11.6373C36.7832 9.61856 36.4652 8.23066 36.01 7.02832C35.5547 5.7666 34.926 4.70527 33.8926 3.65137C32.8664 2.59746 31.833 1.94434 30.6189 1.46191C29.441 0.994336 28.0969 0.667773 26.1313 0.578711C24.1512 0.482227 23.5225 0.459961 18.5 0.459961Z"
                  fill="#1C2996"
                />
                <path
                  d="M18.499 9.7002C13.2525 9.7002 8.99609 14.0717 8.99609 19.46C8.99609 24.8482 13.2525 29.2197 18.499 29.2197C23.7455 29.2197 28.002 24.8482 28.002 19.46C28.002 14.0717 23.7455 9.7002 18.499 9.7002ZM18.499 25.7908C15.0953 25.7908 12.3348 22.9557 12.3348 19.46C12.3348 15.9643 15.0953 13.1291 18.499 13.1291C21.9027 13.1291 24.6633 15.9643 24.6633 19.46C24.6633 22.9557 21.9027 25.7908 18.499 25.7908Z"
                  fill="#1C2996"
                />
                <path
                  d="M30.5973 9.31465C30.5973 10.5764 29.6 11.5932 28.3787 11.5932C27.1502 11.5932 26.1602 10.569 26.1602 9.31465C26.1602 8.05293 27.1574 7.03613 28.3787 7.03613C29.6 7.03613 30.5973 8.06035 30.5973 9.31465Z"
                  fill="#1C2996"
                />
              </g>
              <defs>
                <clipPath id="clip0_2801_648">
                  <rect
                    width="37"
                    height="38"
                    fill="white"
                    transform="translate(0 0.459961)"
                  />
                </clipPath>
              </defs>
            </svg>
          </IconSome>
        </IconWrapper>
        {/* because its costume component, the elements starts with capital  */}
        <ContactInfoWrapper>
          <Heading>Contact us</Heading>
          <ContactLink href="mailto:fake@sunnyyoga.se">
            fake@sunnyyoga.se
          </ContactLink>
          <ContactText>+46 123 456 789</ContactText>
          <ContactText>Fake Gatan 23, Stockholm</ContactText>
        </ContactInfoWrapper>
      </Layout>
    </YellowWrapper>
  );
};

// FFCD64 (yellow)
