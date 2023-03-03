/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import WavyText from "../../global_componenets/WavyText";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className=" px-4 bg-gradient-to-b from-white to-red-300">
      <WavyText
        text="FAQ"
        className="text-center font-bold lg:text-6xl w-[100%] flex items-center justify-center mb-28 md: text-[28px] font-[Rancho] tracking-widest"
      ></WavyText>

      <div className="grid justify-items-center border-b-2 pb-24">
        <div className="">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className=""
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-2xl">
                HOW CAN I JOIN?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-xl">
                You need to join our Discord server. But note that millions of
                members are fighting to get access to Red Devils NFTs. Hurry up!
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-2xl">
                HOW MANY DEVILS WILL FIGHT TO GET THE GRAVEYARD?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-xl">
                1000, pro
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-2xl">
                ON WHAT BLOCKCHAIN IS RED DEVIL RUN?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-xl">
                It’s Solana.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-2xl">
                WHAT IS THE UTILITY OF THE NFTS?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-xl">
                You can read it above, pro!
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-2xl">
                OH, MY GOSH, I AM SO EXCITED TO HAVE AN RED DEVILS NFT!!
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-[Rancho] tracking-widest text-red-900 font-bold text-xl">
                Of course, we know. Everybody is.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <p className="my-4 text-center text-md font-normal leading-5 font-[Rancho] tracking-widest">
        Copyright 2023, Red Devil
      </p>
    </div>
  );
}
