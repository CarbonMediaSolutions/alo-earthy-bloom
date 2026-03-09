import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms & Conditions | Aló Accommodation</title>
        <meta name="description" content="Terms and conditions for booking at Aló Accommodation." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground font-body text-lg">
              Last Updated: 4 December 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-spacing section-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none font-body text-foreground">
              
              <p className="text-muted-foreground mb-8">
                These Terms & Conditions govern all bookings, stays, payments, and interactions with Aló Accommodation ("we", "our", "us"). By making a booking, entering the premises, or using any of our services, you ("the guest", "you", "your") agree to abide by these Terms & Conditions.
              </p>

              {/* General Information */}
              <div className="bg-secondary/50 rounded-lg p-6 mb-10">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">General Information</h2>
                <ul className="space-y-2 text-foreground">
                  <li><strong>Business Name:</strong> Aló Accommodation</li>
                  <li><strong>Operator / Group:</strong> BUCHU WINGS (PTY) LTD</li>
                  <li><strong>Information Officer:</strong> Armand Stemmett (accounts@buchufarm.com)</li>
                </ul>
                <p className="mt-4 text-muted-foreground text-sm">
                  These Terms & Conditions apply to all rooms, facilities and services offered under Aló Accommodation and by making any booking you confirm you have read and accepted all these terms and conditions.
                </p>
              </div>

              {/* Bookings & Payments */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                Bookings & Payments
              </h2>
              
              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Booking Confirmation</h3>
              <p className="text-muted-foreground mb-4">
                A booking is only confirmed once full payment is received and the guest receives written and/or online confirmation.
              </p>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Payment Methods</h3>
              <p className="text-muted-foreground mb-4">
                We accept payments online through our official payment gateway integrated into the ResNova and ResRequest booking systems. We do NOT accept cash payments on site and all bookings need to be paid in full in advance of arrival with confirmation that funds have been received.
              </p>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Rates & Changes</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Rates are subject to availability and may change without prior notice.</li>
                <li>Quoted prices include VAT where applicable.</li>
                <li>Promotional or discounted rates are subject to specific conditions.</li>
                <li>Upon receiving payment, the guest and all involved parties automatically agree to all terms & conditions.</li>
              </ul>

              {/* Cancellation & Refund Policy */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                Cancellation & Refund Policy
              </h2>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Standard Cancellation Policy</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Cancellations made more than 60 days prior to arrival: 10% administration fee.</li>
                <li>Cancellations made between 61 and 31 days before arrival: 50% cancellation fee applies.</li>
                <li>Cancellations made within 30 days of arrival: 100% cancellation fee of total booking is charged.</li>
              </ul>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">No-Show Policy</h3>
              <p className="text-muted-foreground mb-4">
                Guests who do not arrive without prior agreement from Aló Accommodation will be charged the full booking amount. This remains non-refundable and dates are not reschedulable for no-shows.
              </p>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Refund Processing</h3>
              <p className="text-muted-foreground mb-4">
                Refunds (when applicable) are processed within 21 business days, to the banking details provided and a 10% administration fee applicable.
              </p>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Termination</h3>
              <p className="text-muted-foreground mb-6">
                Aló Accommodation reserves the right to immediately terminate a guest(s) stay, with full cancellation fees applicable, if a guest needs to be removed due to misconduct or aggressive behaviour. Upon immediate check-out or termination, all damages may be charged to the guest via card payment.
              </p>

              {/* Check-in & Check-out */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                Check-in & Check-out
              </h2>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Standard Times</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong>Check-in (all rooms Except Groom's Room):</strong> at 14h00</li>
                <li><strong>Late check-ins:</strong> Only per pre-arrangement up until 17h00, any later will be no-show except if pre-arranged and agreed with Aló Accommodation in advance.</li>
                <li><strong>Check-out:</strong> strictly at 10h00</li>
                <li><strong>Groom's Room Check-out:</strong> strictly 09h00</li>
              </ul>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Late Check-out & Early Check-in</h3>
              <p className="text-muted-foreground mb-4">
                Booking of an additional night is compulsory in order to receive a late check-out or earlier check-in.
              </p>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Check-in</h3>
              <p className="text-muted-foreground mb-4">
                All guests receive keys upon check-in from management, when signing and filling in the arrival form for security and safety measures. As per Governing law and for health and safety reasons all guests are to show / present valid ID / passports.
              </p>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Check-out</h3>
              <p className="text-muted-foreground mb-6">
                Check out will only be final once Aló Accommodation management have done a check-out inspection with key-handover, any missing, damaged or broken items will be payable as per the Replacement & Damage Policy by card immediately.
              </p>

              {/* House Rules */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                House Rules
              </h2>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">General Conduct</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>No Alcoholic beverages may be brought onto and into the property, immediate termination of stay without refund will be applicable if found.</li>
                <li>No smoking inside the rooms.</li>
                <li>No noise or loud music in rooms or on the porch.</li>
                <li>Only the number of guests allowed per room may sleep over.</li>
                <li>No children under 12 may stay in rooms unsupervised.</li>
                <li>Pets are not allowed.</li>
                <li>No disturbing other guests.</li>
                <li>No entering rooms of other parties' guests, without invitation to do so, then only when they are present.</li>
                <li>All property of Aló Accommodation remains in their designated areas.</li>
                <li>Parking at own risk.</li>
                <li>No drunk driving or hooting on premises.</li>
              </ul>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Safety & Security</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Each room has a separate alarm system.</li>
                <li>Beam sensors are set approximately 5cm from windows and doors. Please do not lean out or put hands through windows or doors when activated, this will trigger the alarm.</li>
                <li>Guests are responsible for keeping doors locked and valuables secure.</li>
              </ul>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Facilities & Utilities</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>The property uses borehole water. Use at your own risk.</li>
                <li>Complimentary bottled water is provided in the rooms.</li>
                <li>Unplug utilities such as the Raid Liquid Mosquito Killer and hairdryer when not in use.</li>
                <li>Guests are welcome to make use of items provided in the room without disrupting the integrity of the items.</li>
                <li>Bathroom amenities provided are free for use.</li>
              </ul>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Inventory & Damages</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Please check room inventory within 30 minutes of arrival and report discrepancies via the number provided.</li>
                <li>Any missing items, damages, or breakages after check-out will be charged to the guest via card payment upon check out.</li>
                <li>The Guest will be responsible for any fees incurred through Misconduct or damages to property.</li>
              </ul>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Right of Admission</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Aló Accommodation reserves the right to remove any guest whose reckless or disruptive behaviour may endanger others or damage property.</li>
                <li>Hostile behaviour will not be tolerated, staff reserve the right to refuse service to any form of violent, intoxicated or inappropriate behaviour.</li>
                <li>No firearms, illegal substances or items are allowed on site.</li>
              </ul>

              {/* Liability */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                Liability
              </h2>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Guest Responsibility</h3>
              <p className="text-muted-foreground mb-4">
                Guests stay and park at Aló Accommodation at their own risk.
              </p>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Loss, Damage or Theft</h3>
              <p className="text-muted-foreground mb-2">Aló Accommodation, its staff or any affiliates will not liable for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Loss or theft of personal items</li>
                <li>Misplaced items</li>
                <li>Damage to personal property</li>
                <li>Injuries resulting from misuse of facilities</li>
                <li>Damages caused by external factors (weather, insects, borehole water, etc.)</li>
                <li>Failure to return the keys upon departure will result in a fee of R500, charged to the guest account.</li>
              </ul>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Use of Facilities</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>All facilities must be used responsibly and in accordance with the General Conduct.</li>
                <li>Items provided in the rooms to be returned to them upon check-out.</li>
                <li>Missing items will be payable via card upon check-out.</li>
                <li>Any indoor & outdoor property and facilities of Aló Accommodation to be used responsibly and for their purposes only.</li>
              </ul>

              <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Events Outside Our Control</h3>
              <p className="text-muted-foreground mb-2">Aló Accommodation, its staff or any affiliates will not be liable for any disruption caused by:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Loadshedding or utility failures</li>
                <li>Other guests / disruptive behaviour</li>
                <li>Payment gateway downtime</li>
                <li>Third-party system errors</li>
                <li>Natural or unforeseen events</li>
              </ul>

              {/* Replacement & Damage Policy */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                Replacement & Damage Policy
              </h2>

              <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                <h3 className="font-heading text-lg font-medium text-foreground mb-3">R1,500 Replacement Fee</h3>
                <p className="text-muted-foreground text-sm">
                  Blankets, duvet inners, duvet covers, flat sheets, fitted sheets, mattress protectors, bed throws, bath towels, bath mats, curtains, glass door/window repair or replacement, bedside tables, beds (single/double), kitchen cupboards, cupboard doors, hinge repairs, repaint work, kettles, and fridges.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                <h3 className="font-heading text-lg font-medium text-foreground mb-3">R500 Replacement Fee</h3>
                <p className="text-muted-foreground text-sm">
                  Decorative pillows, pillow protectors and covers, glasses, cutlery, crockery, information signs, room number plaques, fragrance devices, toilet brush/holders, hand towels, face towels, door mats (inside/outside), and any electronics, switches, lights, alarm systems, or lost keys.
                </p>
              </div>

              <p className="text-muted-foreground text-sm italic mb-6">
                These fixed fees do not represent the retail cost of the items, but reflect the time, labour, administration, and operational disruption involved in sourcing and replacing them.
              </p>

              {/* Changes to Bookings */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                Changes to Bookings or Facilities
              </h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to modify or withdraw rooms, facilities, or services to maintain health, safety, or operational integrity, without prior notice.
              </p>

              {/* Website & Booking System */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                Website & Booking System Integration
              </h2>
              <p className="text-muted-foreground mb-2">Guests using our website or booking system agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Provide accurate information</li>
                <li>Use the booking system only for legitimate purposes</li>
                <li>Not interfering with the security of the website or booking systems</li>
                <li>We may suspend access if misuse is detected.</li>
                <li>Where incorrect data has been provided these bookings will be null and void at no refund and at full cost.</li>
              </ul>

              {/* Payment Gateway Terms */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                Payment Gateway Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>Payments handled through third-party gateways are subject to those companies' terms.</li>
                <li>We do not store or process card information directly.</li>
              </ul>

              {/* Amendments */}
              <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                Amendments to These Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li>We may update these Terms & Conditions at any time.</li>
                <li>Updated versions will be posted on our website and become effective immediately unless stated otherwise.</li>
              </ul>

              {/* Contact Details */}
              <div className="bg-secondary/50 rounded-lg p-6 mb-12">
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Contact Details</h2>
                <p className="text-muted-foreground mb-2">For questions or concerns, please contact:</p>
                <ul className="space-y-1 text-foreground">
                  <li><strong>Aló Accommodation</strong></li>
                  <li>Email: <a href="mailto:reservations@aloaccommodation.co.za" className="text-primary hover:underline">reservations@aloaccommodation.co.za</a></li>
                  <li>WhatsApp: <a href="https://wa.me/27845063119" className="text-primary hover:underline">084 506 3119</a></li>
                </ul>
              </div>

              {/* Privacy Policy Section */}
              <div className="border-t-4 border-primary pt-12 mt-16">
                <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-2">Privacy Policy</h1>
                <p className="text-muted-foreground mb-2">BUCHU WINGS (PTY) LTD</p>
                <p className="text-muted-foreground mb-8">Last Updated: 04 December 2025</p>

                <p className="text-muted-foreground mb-8">
                  BUCHU WINGS (PTY) LTD ("we", "our", "us") is committed to protecting the privacy of all individuals whose personal information we collect and process. This Privacy Policy explains how we collect, use, store, and protect personal information in accordance with the Protection of Personal Information Act (POPIA) of South Africa.
                </p>

                {/* Company Information */}
                <div className="bg-secondary/50 rounded-lg p-6 mb-10">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Company Information</h2>
                  <ul className="space-y-2 text-foreground text-sm">
                    <li><strong>Business Name:</strong> BUCHU WINGS (PTY) LTD</li>
                    <li><strong>Company Registration Number:</strong> 2025 / 684255 / 07</li>
                    <li><strong>Company Registration Date:</strong> 28/08/2025</li>
                    <li><strong>Physical Address:</strong> Lichtenburg Farm K11 R302, Klipheuwel Road, Durbanville, 7550</li>
                    <li><strong>Registered Address:</strong> 22 Avenue des Huguenots, Fresnaye, Cape Town, Western Cape, 8005</li>
                    <li><strong>Postal Address:</strong> 22 Avenue des Huguenots, Fresnaye, Cape Town, Western Cape, 8005</li>
                    <li><strong>Contact Details:</strong> Armand Stemmett Tel: +27 (0)84 506 3119</li>
                    <li><strong>Email:</strong> <a href="mailto:accounts@buchufarm.com" className="text-primary hover:underline">accounts@buchufarm.com</a></li>
                    <li><strong>Information Officer:</strong> Armand Stemmett</li>
                  </ul>
                </div>

                {/* Personal Information We Collect */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  Personal Information We Collect
                </h2>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Full name</li>
                  <li>Contact details (email address, phone number)</li>
                  <li>Physical or postal address</li>
                  <li>Identification or company information (where required)</li>
                  <li>Billing information</li>
                  <li>Any information voluntarily submitted via forms, email, or communication channels</li>
                </ul>

                <h3 className="font-heading text-xl font-medium text-foreground mt-6 mb-3">Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>IP addresses</li>
                  <li>Browser type, device information, operating system</li>
                  <li>Website usage data (analytics)</li>
                  <li>Cookies and tracking data</li>
                </ul>

                {/* How We Use Personal Information */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  How We Use Personal Information
                </h2>
                <p className="text-muted-foreground mb-2">BUCHU WINGS (PTY) LTD processes personal information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>To communicate with clients, suppliers, and stakeholders</li>
                  <li>To manage inquiries, operational tasks, and business relationships</li>
                  <li>To issue invoices and manage financial processes</li>
                  <li>To comply with legal, regulatory, and audit requirements</li>
                  <li>To improve our services, operations, and communication</li>
                  <li>For internal administrative purposes</li>
                  <li>For security, fraud prevention, and risk management</li>
                </ul>
                <p className="text-muted-foreground mb-6">We will not use personal information for any unrelated purpose without consent.</p>

                {/* Legal Basis for Processing */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  Legal Basis for Processing
                </h2>
                <p className="text-muted-foreground mb-2">We process personal information based on:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Consent provided by the individual</li>
                  <li>Performance of a contract or supply agreement</li>
                  <li>Compliance with legal obligations</li>
                  <li>Legitimate business interests, including communication, operational functionality, and service improvement</li>
                </ul>

                {/* Sharing of Personal Information */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  Sharing of Personal Information
                </h2>
                <p className="text-muted-foreground mb-2">We may share personal information with:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Internal business units within the Buchu Group</li>
                  <li>Service providers assisting with hosting, IT, accounting, or communication</li>
                  <li>Legal and regulatory authorities where required</li>
                  <li>Third parties only with consent or lawful requirement</li>
                </ul>
                <p className="text-muted-foreground font-semibold mb-6">We do not sell personal information.</p>

                {/* Data Storage & Security */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  Data Storage & Security
                </h2>
                <p className="text-muted-foreground mb-2">We take reasonable technical and organizational measures to protect personal information, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Secure servers and encrypted communication</li>
                  <li>Access control protocols</li>
                  <li>Password protection</li>
                  <li>Physical and digital security practices</li>
                </ul>
                <p className="text-muted-foreground mb-6">While we take reasonable steps to protect data, no system is completely secure. Clients share information at their own risk.</p>

                {/* Retention of Personal Information */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  Retention of Personal Information
                </h2>
                <p className="text-muted-foreground mb-2">Personal information is kept only as long as necessary:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>For business and operational purposes</li>
                  <li>For legal and regulatory compliance (e.g., accounting: 5 years)</li>
                  <li>Until consent is withdrawn, where applicable</li>
                </ul>
                <p className="text-muted-foreground mb-6">Data no longer required is safely destroyed or anonymized.</p>

                {/* Your Rights Under POPIA */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  Your Rights Under POPIA
                </h2>
                <p className="text-muted-foreground mb-2">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Request access to your personal information</li>
                  <li>Request correction or deletion</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent</li>
                  <li>Lodge a complaint with the Information Regulator</li>
                </ul>
                <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                  <p className="text-foreground font-medium mb-1">Information Regulator (South Africa)</p>
                  <p className="text-muted-foreground text-sm">Website: <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.justice.gov.za/inforeg/</a></p>
                  <p className="text-muted-foreground text-sm">Email: <a href="mailto:complaints.IR@justice.gov.za" className="text-primary hover:underline">complaints.IR@justice.gov.za</a></p>
                </div>

                {/* Cookies & Tracking */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  Cookies & Tracking
                </h2>
                <p className="text-muted-foreground mb-2">Our website may use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li>Improve user experience</li>
                  <li>Track analytics and performance</li>
                  <li>Maintain security features</li>
                </ul>
                <p className="text-muted-foreground mb-6">You may disable cookies in your browser; however, this may affect website functionality.</p>

                {/* Third-Party Links */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  Third-Party Links
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our website or communications may contain links to third-party sites. We are not responsible for the privacy practices or content of these external websites.
                </p>

                {/* International Data Transfers */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  International Data Transfers
                </h2>
                <p className="text-muted-foreground mb-6">
                  Where service providers operate outside South Africa (e.g., hosting or analytics), personal data may be transferred internationally. All such transfers comply with POPIA requirements.
                </p>

                {/* Changes to This Policy */}
                <h2 className="font-heading text-2xl font-semibold text-foreground mt-12 mb-6 pb-2 border-b border-border">
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground mb-6">
                  We may update this Privacy Policy from time to time. Updated versions will be posted and effective immediately unless otherwise stated.
                </p>

                {/* Contact Us */}
                <div className="bg-secondary/50 rounded-lg p-6 mt-8">
                  <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground mb-4">For questions regarding this Privacy Policy or to exercise your rights, contact:</p>
                  <ul className="space-y-1 text-foreground">
                    <li><strong>Information Officer:</strong> Armand Stemmett</li>
                    <li>Email: <a href="mailto:accounts@buchufarm.com" className="text-primary hover:underline">accounts@buchufarm.com</a></li>
                    <li>Tel: +27 (0)84 506 3119</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
