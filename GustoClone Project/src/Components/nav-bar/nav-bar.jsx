import { Text, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import HeaderSideNavBar from "./header-side-nav/header-side-nav";
import "./nav-bar.css";
import "./header-side-nav/header-side-nav.css";

function NavBar() {
  //get date & time remaining until 1Jan
  const [remainingTime, setRemainingTime] = useState("");
  useEffect(() => {
    const calculateRemainingTime = () => {
      const currentDate = new Date();
      const targetDate = new Date(currentDate.getFullYear() + 1, 0, 1); // January 1st of the next year

      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const formattedString = `
  Days: ${days.toString().padStart(2, "0")}:
  Hours: ${hours.toString().padStart(2, "0")}:
  Minutes: ${minutes.toString().padStart(2, "0")}:
  Seconds: ${seconds.toString().padStart(2, "0")}
`;

        setRemainingTime(formattedString);
      } else {
        setRemainingTime("Happy New Year!");
      }
    };

    // Update the remaining time every second
    const intervalId = setInterval(calculateRemainingTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container-fluid padding-top-10px padding-bottom-10px align-items-center bg-kale-500 width-100">
        <div className="row justify-content-center">
          <Text colorScheme="whiteAlpha" fontSize="20px">
            {remainingTime} until January 1st. Now’s the easiest time to switch
            your payroll and HR.
            <Link
              variant="brandPrimary"
              color="whiteAlpha"
              textDecoration="underline"
              href="#"
              marginLeft="5" // Adjust the value to control the gap
            >
              Create account
            </Link>
          </Text>
        </div>
      </div>
      <HeaderSideNavBar />
    </>
  );
}

export default NavBar;
