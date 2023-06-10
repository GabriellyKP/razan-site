import { SVGProps, Ref, forwardRef, memo } from "react";

const IconInovation = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 500.267 500.267"
    xmlSpace="preserve"
    width="60px"
    height="60px"
    ref={ref}
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCCCCC"
      strokeWidth="11.005874"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        style={{ fill: "#fa913e" }}
        d="M370.667,222.933c0-68.267-56.533-123.733-125.867-120.533c-61.867,2.133-112,52.267-116.267,114.133 c-2.133,30.933,8.533,58.667,25.6,81.067c17.067,21.333,25.6,48,25.6,74.667v2.133H318.4v-2.133c0-26.667,8.533-53.333,25.6-74.667 C361.067,277.333,370.667,251.733,370.667,222.933z"
      ></path>
      <path
        style={{ fill: "#fa913e" }}
        d="M319.467,374.4H180.8v54.4l0,0c0,1.067,0,1.067,0,2.133c0,38.4,30.933,69.333,69.333,69.333 s69.333-30.933,69.333-69.333c0-1.067,0-1.067,0-2.133l0,0V374.4z"
      ></path>
      <g>
        <rect
          x="15.467"
          y="205.867"
          style={{ fill: "#fa913e" }}
          width="85.333"
          height="29.867"
        ></rect>
        <rect
          x="399.467"
          y="205.867"
          style={{ fill: "#fa913e" }}
          width="85.333"
          height="29.867"
        ></rect>
        <rect
          x="235.2"
          style={{ fill: "#fa913e" }}
          width="29.867"
          height="70.4"
        ></rect>
        <rect
          x="82.756"
          y="74.295"
          transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 138.2689 235.729)"
          style={{ fill: "#fa913e" }}
          width="70.399"
          height="29.866"
        ></rect>
        <rect
          x="346.095"
          y="337.833"
          transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 401.4662 871.8259)"
          style={{ fill: "#fa913e" }}
          width="70.399"
          height="29.866"
        ></rect>
        <rect
          x="346.608"
          y="74.312"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 48.7234 296.1182)"
          style={{ fill: "#fa913e" }}
          width="70.399"
          height="29.866"
        ></rect>
        <rect
          x="83.312"
          y="337.397"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -214.4238 186.9958)"
          style={{ fill: "#fa913e" }}
          width="70.399"
          height="29.866"
        ></rect>
      </g>
      <g>
        <path
          style={{ fill: "#FFFFFF" }}
          d="M291.733,222.933c-12.8,0-23.467,10.667-23.467,23.467v13.867h-18.133H232v-14.933 c0-12.8-10.667-23.467-23.467-23.467s-23.467,10.667-23.467,23.467v1.067c0,12.8,10.667,23.467,23.467,23.467H222.4V374.4h9.6 V270.933h18.133h18.133v104.533h9.6V270.933h13.867c12.8,0,23.467-10.667,23.467-23.467V246.4 C315.2,233.6,304.533,222.933,291.733,222.933z M222.4,260.267h-13.867c-7.467,0-13.867-6.4-13.867-13.867v-1.067 c0-7.467,6.4-13.867,13.867-13.867c7.467,0,13.867,6.4,13.867,13.867V260.267z M304.533,247.467c0,7.467-6.4,13.867-13.867,13.867 H276.8V246.4c0-7.467,6.4-13.867,13.867-13.867c7.467,0,13.867,6.4,13.867,13.867V247.467z"
        ></path>
        <rect
          x="201.067"
          y="397.867"
          style={{ fill: "#FFFFFF" }}
          width="97.067"
          height="24.533"
        ></rect>
        <rect
          x="214.933"
          y="442.667"
          style={{ fill: "#FFFFFF" }}
          width="70.4"
          height="24.533"
        ></rect>
      </g>
    </g>
  </svg>
);

const ForwardRef = forwardRef(IconInovation);
const Memo = memo(ForwardRef);
export default Memo;
