import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import "../pages/styles/FAQ.css"
import FAQ_logo from "../Images/FAQ_logo.jpeg"
import FAQ_back from "../Images/FAQ-back.png"


function FAQ(){
    return(
        <div className="main-heading">
          <img class="FAQ-logo" src={FAQ_logo }/>
          <h1 class="question-heading ">Frequently Asked Questions</h1>
          <img class="FAQ-back" src={FAQ_back} />
            <div class="questions">
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Farm Equipment?</Accordion.Header>
        <Accordion.Body>
        Farm equipment rental services offer cost benefits to farmers and help 
        them transform agriculture through mechanization. Top equipment types of
         farm equipment rental: Tractors. Harvesters. Sprayers.
         Equipment rental, also called plant hire in some countries (in the UK for instance),
          is a service industry providing machinery, equipment and tools of all kinds and sizes 
          (from earthmoving to powered access, from power generation to hand-held tools, etc.)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why farm equipment rental?</Accordion.Header>
        <Accordion.Body>
        Equipment rental helps companies reduce their fixed costs and minimises the financial
         risks of owning equipment fleets. By renting rather than owning, the user only pays for
          equipment when it is needed, and rental reduces the ongoing costs that come with equipment ownership, 
          including maintenance, in-service inspections, repairs, transportation and storage. Rental 
          allows companies to cope with peak workloads without having to invest in extra equipment.
           It represents a low-risk way of obtaining equipment when market conditions are uncertain 
           and allows companies to enter new markets or sectors without burdensome investments in machinery 
            capital that would otherwise be tied up in equipment can be channelled into a company's core business.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Which equipment is mostly used in agricultural work?</Accordion.Header>
        <Accordion.Body>
        Some of the essential and most used machinery are Combine or Combine Harvester, Rotavator or Rotary Tiller,
         Plough or Plow, Tractor Trailer, Power Harrow, Leveler, water bowser, ripper machine, and disc harrow. Below 
         we have mentioned a few of the latest agriculture machinery and their uses in farming.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What are the types of costs afforded for the rental equipment?</Accordion.Header>
        <Accordion.Body>
            <li type="none"><b> Operating Expenses:</b></li>
       <p>
Rental equipment is typically classified as an operating expense, as it is necessary for the day-to-day 
operations of the business. This is the most common expense category for rental equipment, and is typically
 the most straightforward to classify.</p>

<li type="none"><b>Capital Expenditures:</b></li>
<p>In some cases, rental equipment may be classified as a capital expenditure. This is typically the case when the
 equipment is considered to be a long-term asset of the business, and is not expected to be replaced or upgraded 
 on a regular basis. Capitalizing rental equipment can have tax implications, so it is important to consult with 
 a tax advisor before making this classification.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Is equipment rental a fixed cost?</Accordion.Header>
        <Accordion.Body>
        There is the equipment used for an extended period in various production units, and rental is paid on such equipment. 
        Such equipment rental is fixed in nature and incurs fixed costs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What are the uses of agriculture equipment??</Accordion.Header>
        <Accordion.Body>
        For crop production they include handling of residues from previous crops; primary and secondary tillage of 
        the soil; fertilizer distribution and application; seeding, planting, and transplanting; cultivation; pest 
        control; harvesting; transportation; storage; premarketing processing; drainage; irrigation and erosion
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>What is the market potential for agriculture equipment?
</Accordion.Header>
        <Accordion.Body>
        The global agriculture equipment market size was valued at USD 2,43.77 billion in 2021. It is expected to reach USD
         4,16.08 billion by 2030, growing at a CAGR of 6.12% during the forecast period (2022–2030).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Why buy when you can rent equipment?</Accordion.Header>
        <Accordion.Body>
        Whereas the main benefit of Renting is flexibility, the main benefit of Purchasing is control. 
         If you own the equipment,
         then you have control over both the access to the asset and control over its specifications.
Owning a piece of equipment will allow your staff to become experts in its operation, and also enables 
your repair personnel to understand the equipment’s technical requirements, individual quirks, and past repair history.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Is equipment rent a current asset?</Accordion.Header>
        <Accordion.Body>
        Equipment is not considered a current asset. Instead, it is classified as a long-term asset. The reason for this classification
         is that equipment is designated as part of the fixed assets category in the balance sheet, and this category is a long-term asset; 
         that is, the usage period for a fixed asset extends for more than one year. This classification of equipment extends to all types of equipment, including office equipment and production machinery.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
            </div>
       


    );
}
export default FAQ;