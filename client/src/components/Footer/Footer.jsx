import React, { useEffect } from 'react'
import "./Footer.css"
import Link from "@mui/material/Link";

function Footer(props) {
  useEffect(() => {
    // Add Google Translate widget code
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.head.appendChild(script);

    // Initialize the Google Translate widget
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',  // Change 'en' to your default language
          layout: window.google.translate.TranslateElement.InlineLayout,
        },
        'google_translate_element'
      );
    };
  }, []);
  return (
    <div className="footer">
        <hr></hr>
        <div className="footer-content-container">
          <div className="mytranslate-container">
            <div id="google_translate_element"></div>
          </div>
          
          <br></br>
          <p>This page was last edited on {props.date} {props.month} {props.year}, at {props.time} (IST).</p>
          <br></br>
          <p>Text is available under the Creative Commons Attribution-ShareAlike License 4.0; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.</p>
          <br></br>
          <nav><ul>
            <li><Link href="privacy">Privacy</Link></li>
            <li><Link href="about">About us</Link></li>
            <li><Link href="contact">Contact</Link></li>
            <li><Link href="help">Help</Link></li>
            <li><Link href="donate">Donate</Link></li>
            <li><Link href="developer">Developers</Link></li>
            <li><Link href="terms">Terms</Link></li>
            <li><Link href="posts">Popular posts</Link></li>
            </ul></nav>
        </div>
    </div>
  )
}

export default Footer