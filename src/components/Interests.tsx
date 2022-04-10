import React from "react";
import Section from "./Section";

export default function Interests() {
  return (
    <Section title={{ key: "Interests", value: "interests" }}>
      <div className='interest__card__group grid--gap'>
        <div className='interest__card col--12 col--md--6'>
          <h3 className='interest__card__title'>Family</h3>
          <p>
            My priority is my family, their saftey, and happiness. None of my
            professional, academic, or personal achievements compare to the
            pride I have in my family.
          </p>
        </div>
        <div className='interest__card col--12 col--md--6'>
          <h3 className='interest__card__title'>Building Tools That Empower</h3>
          <p>
            So many great tools have been created. While many of these tools try
            to appeal to a broad audience I have found that they often fall
            short in the industries that I am employed in. These tools serve
            inspiration as I look to solve unique problems in underserved
            industries.
          </p>
        </div>
      </div>
    </Section>
  );
}
