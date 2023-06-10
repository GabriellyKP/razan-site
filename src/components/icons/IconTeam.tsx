import { SVGProps, Ref, forwardRef, memo } from "react";

const IconTeam = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="28"
    viewBox="0 0 30 28"
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      d="M17.903 10.645H14.9998H12.0966C10.4998 10.645 9.19336 11.9515 9.19336 13.5482V17.9031C9.19336 18.4353 9.4353 18.9192 9.774 19.2579C10.1127 19.5966 10.5966 19.8386 11.1288 19.8386V24.1934C11.1288 25.7902 12.4353 27.0966 14.0321 27.0966H14.9998H15.9676C17.5643 27.0966 18.8708 25.7902 18.8708 24.1934V19.8386C19.403 19.8386 19.8869 19.645 20.2256 19.2579C20.5643 18.9192 20.8063 18.4353 20.8063 17.9031V13.5482C20.8063 11.9515 19.4998 10.645 17.903 10.645Z"
      fill="#FA913E"
    />
    <path
      d="M15.0001 8.70962C16.8708 8.70962 18.3872 7.19316 18.3872 5.32252C18.3872 3.45188 16.8708 1.93542 15.0001 1.93542C13.1295 1.93542 11.613 3.45188 11.613 5.32252C11.613 7.19316 13.1295 8.70962 15.0001 8.70962Z"
      fill="#FA913E"
    />
    <path
      d="M8.03226 21.6289C7.93548 21.5322 7.79032 21.4354 7.69355 21.3386C6.77419 20.3709 6.24194 19.1612 6.24194 17.9031V13.5483C6.24194 11.9999 6.87097 10.5483 7.8871 9.53218C8.17742 9.24185 7.93548 8.70959 7.54839 8.70959C6.72581 8.70959 5.80645 8.70959 5.80645 8.70959H2.90323C1.30645 8.70959 0 10.016 0 11.6128V15.9677C0 16.4999 0.241936 16.9838 0.580646 17.3225C0.919355 17.6612 1.40323 17.9031 1.93548 17.9031V22.258C1.93548 23.8548 3.24194 25.1612 4.83871 25.1612H5.80645H6.77419C7.20968 25.1612 7.59677 25.0644 7.93548 24.9193C8.12903 24.8225 8.22581 24.6773 8.22581 24.4838C8.22581 23.9031 8.22581 22.5483 8.22581 22.016C8.22581 21.8709 8.17742 21.7257 8.03226 21.6289Z"
      fill="#FA913E"
    />
    <path
      d="M5.80653 6.77419C7.67717 6.77419 9.19363 5.25774 9.19363 3.3871C9.19363 1.51645 7.67717 0 5.80653 0C3.93589 0 2.41943 1.51645 2.41943 3.3871C2.41943 5.25774 3.93589 6.77419 5.80653 6.77419Z"
      fill="#FA913E"
    />
    <path
      d="M27.0968 8.70959H24.1935C24.1935 8.70959 23.2742 8.70959 22.4516 8.70959C22.0161 8.70959 21.8226 9.19347 22.1129 9.53218C23.129 10.5967 23.758 11.9999 23.758 13.5483V17.9031C23.758 19.1612 23.2742 20.3709 22.3064 21.3386C22.2097 21.4354 22.1129 21.5322 21.9677 21.6289C21.8709 21.7257 21.7742 21.8709 21.7742 22.016C21.7742 22.5483 21.7742 23.8548 21.7742 24.4838C21.7742 24.6773 21.8709 24.8709 22.0645 24.9193C22.4032 25.0644 22.7903 25.1612 23.2258 25.1612H24.1935H25.1613C26.758 25.1612 28.0645 23.8548 28.0645 22.258V17.9031C28.5968 17.9031 29.0806 17.7096 29.4193 17.3225C29.758 16.9838 30 16.4999 30 15.9677V11.6128C30 10.016 28.6935 8.70959 27.0968 8.70959Z"
      fill="#FA913E"
    />
    <path
      d="M24.1935 6.77419C26.0641 6.77419 27.5806 5.25774 27.5806 3.3871C27.5806 1.51645 26.0641 0 24.1935 0C22.3229 0 20.8064 1.51645 20.8064 3.3871C20.8064 5.25774 22.3229 6.77419 24.1935 6.77419Z"
      fill="#FA913E"
    />
  </svg>
);

const ForwardRef = forwardRef(IconTeam);
const Memo = memo(ForwardRef);
export default Memo;