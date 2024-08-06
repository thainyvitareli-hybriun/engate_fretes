import * as React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';

const Eye = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
    <Path d="M12 16.175q1.95 0 3.312-1.363 1.363-1.362 1.363-3.312 0-1.95-1.363-3.312Q13.95 6.825 12 6.825q-1.95 0-3.312 1.363Q7.325 9.55 7.325 11.5q0 1.95 1.363 3.312Q10.05 16.175 12 16.175Zm0-1.925q-1.15 0-1.95-.8t-.8-1.95q0-1.15.8-1.95t1.95-.8q1.15 0 1.95.8t.8 1.95q0 1.15-.8 1.95t-1.95.8Zm0 5q-3.8 0-6.887-2.113Q2.025 15.025.65 11.5q1.375-3.525 4.463-5.638Q8.2 3.75 12 3.75q3.8 0 6.888 2.112 3.087 2.113 4.462 5.638-1.375 3.525-4.462 5.637Q15.8 19.25 12 19.25Z" />
  </Svg>
);

const EyeOff = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
    <Path d="m19.95 22.975-4.325-4.325q-.775.3-1.687.45-.913.15-1.938.15-3.875 0-6.95-2.15t-4.4-5.6q.525-1.35 1.338-2.513Q2.8 7.825 3.85 6.925L1.025 4.05l1.5-1.525 18.95 18.95Zm-7.95-6.8q.275 0 .562-.037.288-.038.463-.113l-5.55-5.55q-.075.225-.112.5-.038.275-.038.525 0 1.975 1.35 3.325T12 16.175Zm7.525.475L16.3 13.425q.175-.425.275-.913.1-.487.1-1.012 0-1.975-1.35-3.325T12 6.825q-.525 0-1.075.125-.55.125-.85.275L7.45 4.6q1.025-.425 2.175-.638Q10.775 3.75 12 3.75q3.875 0 6.938 2.15Q22 8.05 23.35 11.5q-.575 1.525-1.55 2.837-.975 1.313-2.275 2.313Zm-4.8-4.775-3.1-3.1q.675-.1 1.275.112.6.213 1.025.638.45.425.675 1.037.225.613.125 1.313Z" />
  </Svg>
);

const ArrowLeft = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" height={24} width={24} {...props}>
    <Path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z" />
  </Svg>
);

const Home = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.fill}
        d="m19.267 7.558-6.32-6.322a4.173 4.173 0 0 0-5.894 0L.733 7.558A2.482 2.482 0 0 0 0 9.325v8.18a2.5 2.5 0 0 0 2.5 2.5h15a2.5 2.5 0 0 0 2.5-2.5v-8.18a2.481 2.481 0 0 0-.733-1.767ZM12.5 18.339h-5v-3.278a2.5 2.5 0 0 1 5 0v3.278Zm5.833-.833a.834.834 0 0 1-.833.833h-3.333v-3.278a4.167 4.167 0 0 0-8.334 0v3.278H2.5a.833.833 0 0 1-.833-.833V9.325a.84.84 0 0 1 .244-.59l6.32-6.318a2.507 2.507 0 0 1 3.537 0l6.321 6.321a.84.84 0 0 1 .244.587v8.18Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const CloseLock = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G fill="#4B4F5E" clipPath="url(#a)">
      <Path d="M14.25 6.318V5.25a5.25 5.25 0 1 0-10.5 0v1.068A3.75 3.75 0 0 0 1.5 9.75v4.5A3.754 3.754 0 0 0 5.25 18h7.5a3.754 3.754 0 0 0 3.75-3.75v-4.5a3.75 3.75 0 0 0-2.25-3.432Zm-9-1.068a3.75 3.75 0 0 1 7.5 0V6h-7.5v-.75Zm9.75 9a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 3 14.25v-4.5A2.25 2.25 0 0 1 5.25 7.5h7.5A2.25 2.25 0 0 1 15 9.75v4.5Z" />
      <Path d="M9 10.5a.75.75 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0v-1.5A.75.75 0 0 0 9 10.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const OpenLock = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M240-640h360v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85h-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640Zm0 480h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM240-160v-400 400Z" />
  </Svg>
);

const User = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <G fill="#4B4F5E" clipPath="url(#a)">
      <Path d="M9 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM9 10.5a6.758 6.758 0 0 0-6.75 6.75.75.75 0 1 0 1.5 0 5.25 5.25 0 0 1 10.5 0 .75.75 0 1 0 1.5 0A6.758 6.758 0 0 0 9 10.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const LogoIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25ZM13.411 23.078c0-2.56 2.077-5.394 4.636-6.327L36.602 10c0 2.565-2.076 5.394-4.636 6.328l-9.285 3.378h.008l-.011.004v-.003l-9.267 3.371Zm9.267-3.368v4.637l9.277-3.378c0 2.565-2.076 5.394-4.636 6.328l-4.636 1.686v4.636c0 2.565-2.076 5.394-4.636 6.328v-9.278l-4.636 1.687c0-2.56 2.077-5.394 4.642-6.328v-4.636l4.625-1.682Zm4.663 17.084-4.02 1.46c0-2.218 1.795-4.673 4.02-5.48l4.02-1.462c0 2.22-1.8 4.674-4.02 5.482Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={29.228}
        x2={30.882}
        y1={53.676}
        y2={-4.228}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF7121" />
        <Stop offset={1} stopColor="#FFCE1B" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const Notification = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4B4F5E"
        d="m19.736 11.954-1.662-5.981a8.156 8.156 0 0 0-15.82.414L.969 12.176a4.375 4.375 0 0 0 4.27 5.324h.975a4.375 4.375 0 0 0 8.575 0h.733a4.376 4.376 0 0 0 4.216-5.546Zm-9.235 7.296a2.625 2.625 0 0 1-2.464-1.75h4.928a2.626 2.626 0 0 1-2.464 1.75Zm7.11-4.537a2.604 2.604 0 0 1-2.09 1.037H5.238a2.625 2.625 0 0 1-2.562-3.195l1.287-5.789a6.406 6.406 0 0 1 12.425-.325l1.662 5.981a2.606 2.606 0 0 1-.44 2.291Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h21v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const Setting = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#4B4F5E"
      d="M11 7.333a3.667 3.667 0 1 0 0 7.334 3.667 3.667 0 0 0 0-7.334Zm0 5.5a1.833 1.833 0 1 1 0-3.666 1.833 1.833 0 0 1 0 3.666Z"
    />
    <Path
      fill="#4B4F5E"
      d="m19.52 12.742-.407-.235a8.343 8.343 0 0 0 0-3.016l.407-.234a2.752 2.752 0 0 0-2.75-4.767l-.408.235a8.23 8.23 0 0 0-2.611-1.505v-.47a2.75 2.75 0 0 0-5.5 0v.47c-.956.338-1.841.85-2.611 1.51l-.41-.238a2.751 2.751 0 1 0-2.75 4.766l.407.235a8.342 8.342 0 0 0 0 3.016l-.407.234a2.752 2.752 0 0 0 2.75 4.767l.408-.235A8.23 8.23 0 0 0 8.25 18.78v.47a2.75 2.75 0 0 0 5.5 0v-.47a8.228 8.228 0 0 0 2.611-1.51l.41.237a2.751 2.751 0 1 0 2.75-4.766h-.001ZM17.184 9.28a6.461 6.461 0 0 1 0 3.438.917.917 0 0 0 .426 1.038l.993.574a.917.917 0 1 1-.916 1.589l-.996-.576a.916.916 0 0 0-1.114.151 6.402 6.402 0 0 1-2.972 1.72.917.917 0 0 0-.689.887v1.149a.917.917 0 0 1-1.833 0v-1.148a.917.917 0 0 0-.689-.888 6.402 6.402 0 0 1-2.971-1.722.917.917 0 0 0-1.114-.152l-.994.575a.918.918 0 1 1-.916-1.587l.993-.574a.917.917 0 0 0 .426-1.039 6.46 6.46 0 0 1 0-3.437.917.917 0 0 0-.427-1.035l-.993-.574a.917.917 0 1 1 .916-1.589l.996.576a.917.917 0 0 0 1.113-.148A6.402 6.402 0 0 1 9.395 4.79a.917.917 0 0 0 .689-.892V2.75a.917.917 0 0 1 1.833 0v1.148a.916.916 0 0 0 .689.888 6.402 6.402 0 0 1 2.972 1.722.917.917 0 0 0 1.114.152l.994-.575a.917.917 0 1 1 .916 1.588l-.993.573a.916.916 0 0 0-.425 1.035Z"
    />
  </Svg>
);

const Calendar = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G fill={props.fill} clipPath="url(#a)" opacity={0.5}>
      <Path d="M15.833 1.667H15V.833a.833.833 0 1 0-1.667 0v.834H6.667V.833A.833.833 0 0 0 5 .833v.834h-.833A4.172 4.172 0 0 0 0 5.833v10A4.172 4.172 0 0 0 4.167 20h11.666A4.172 4.172 0 0 0 20 15.833v-10a4.172 4.172 0 0 0-4.167-4.166ZM1.667 5.833a2.5 2.5 0 0 1 2.5-2.5h11.666a2.5 2.5 0 0 1 2.5 2.5v.834H1.667v-.834Zm14.166 12.5H4.167a2.5 2.5 0 0 1-2.5-2.5v-7.5h16.666v7.5a2.5 2.5 0 0 1-2.5 2.5Z" />
      <Path d="M10 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM5.834 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM14.166 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const Search = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.fill}
        d="m16.792 15.79-4.228-4.227a7.096 7.096 0 1 0-1.002 1.001l4.228 4.228a.708.708 0 0 0 1.002-1.001Zm-9.71-3.04a5.667 5.667 0 1 1 5.667-5.667 5.673 5.673 0 0 1-5.666 5.667Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h17v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const Chat = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G fill={props.fill} clipPath="url(#a)" opacity={0.5}>
      <Path d="M20 9.372A10.01 10.01 0 1 0 10.016 20h5.82A4.17 4.17 0 0 0 20 15.833v-6.46Zm-1.666 6.461a2.5 2.5 0 0 1-2.5 2.5h-5.819a8.367 8.367 0 0 1-7.966-5.818 8.264 8.264 0 0 1-.327-3.48 8.37 8.37 0 0 1 7.213-7.3c.36-.045.721-.068 1.083-.068a8.268 8.268 0 0 1 5.316 1.916 8.369 8.369 0 0 1 3 5.869v6.381Z" />
      <Path d="M6.667 7.5h3.334a.833.833 0 0 0 0-1.667H6.667a.833.833 0 1 0 0 1.667ZM13.334 9.167H6.667a.833.833 0 1 0 0 1.666h6.667a.833.833 0 1 0 0-1.666ZM13.334 12.5H6.667a.833.833 0 1 0 0 1.667h6.667a.833.833 0 1 0 0-1.667Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const DashedLine = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={277}
    height={1}
    fill="none"
    {...props}>
    <Path stroke="#CFC9C4" strokeDasharray="3 3" d="M0 .5h277" />
  </Svg>
);

const EmojiSadness = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#8E95AE"
        d="M26 52a26 26 0 1 1 26-26 26.028 26.028 0 0 1-26 26Zm0-47.667A21.666 21.666 0 1 0 47.667 26 21.69 21.69 0 0 0 26 4.333Zm12.276 30.884A20.484 20.484 0 0 0 26 30.333a20.484 20.484 0 0 0-12.276 4.884l2.881 3.237A16.267 16.267 0 0 1 26 34.667a16.267 16.267 0 0 1 9.395 3.787l2.881-3.237ZM13 21.667v2.166h8.667v-2.166a4.333 4.333 0 0 0-8.667 0Zm17.333 0v2.166H39v-2.166a4.333 4.333 0 1 0-8.667 0Z"
        opacity={0.6}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h52v52H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const DoubleArrowRight = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={9}
    fill="none"
    {...props}>
    <G fill="#AFAFAF" clipPath="url(#a)">
      <Path d="M4.436 9a.375.375 0 0 1-.265-.64l3.065-3.065a1.125 1.125 0 0 0 0-1.59L4.17.64a.375.375 0 1 1 .53-.53l3.065 3.064a1.875 1.875 0 0 1 0 2.652L4.7 8.89a.375.375 0 0 1-.265.11Z" />
      <Path d="M.685 9a.375.375 0 0 1-.265-.64l3.595-3.595a.375.375 0 0 0 0-.53L.42.64A.375.375 0 0 1 .95.11l3.595 3.595a1.125 1.125 0 0 1 0 1.59L.951 8.89A.375.375 0 0 1 .685 9Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h9v9H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const CircleOrange = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}>
    <Circle cx={4} cy={4} r={4} fill="url(#a)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={-1.238}
        x2={8.837}
        y1={8}
        y2={7.689}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF912C" />
        <Stop offset={1} stopColor="#FFCC17" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const CircleBlue = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}>
    <Circle cx={4} cy={4} r={4} fill="url(#a)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={8.304}
        x2={-0.128}
        y1={4}
        y2={4.038}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#20D7FF" />
        <Stop offset={1} stopColor="#2A69E3" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const DividerVertical = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={17}
    fill="none"
    {...props}>
    <Path
      stroke="#D1D1D1"
      strokeDasharray="4 6"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 1v15"
    />
  </Svg>
);

const Add = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4B4F5E"
        d="M20 15a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10ZM1.667 13.333a5 5 0 0 0 5 5h6.666a5 5 0 0 0 5-5V6.667a5 5 0 0 0-5-5H6.667a5 5 0 0 0-5 5v6.666Z"
      />
    </G>
    <Path
      fill="#4B4F5E"
      d="M10.833 9.167V5H9.167v4.167H5v1.666h4.167V15h1.666v-4.167H15V9.167h-4.167Z"
    />
    <Defs>
      <ClipPath id="a">
        <Rect width={20} height={20} fill="#fff" rx={5} />
      </ClipPath>
    </Defs>
  </Svg>
);

const Hexagon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={86}
    fill="none"
    {...props}>
    <Path
      fill="url(#a)"
      d="M34 1.887a10 10 0 0 1 10 0l28.105 16.226a10 10 0 0 1 5 8.66v32.454a10 10 0 0 1-5 8.66L44 84.113a10 10 0 0 1-10 0L5.895 67.887a10 10 0 0 1-5-8.66V26.773a10 10 0 0 1 5-8.66L34 1.886Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-18.619}
        x2={92.21}
        y1={87}
        y2={83.576}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FF912C" />
        <Stop offset={1} stopColor="#FFCC17" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const Car = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4B4F5E"
        d="M15 8.25h-.75v-4.5a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3V12a2.245 2.245 0 0 0 1.553 2.129 2.55 2.55 0 0 0-.053.496 2.625 2.625 0 0 0 5.25 0 2.599 2.599 0 0 0-.03-.375h4.56c-.018.124-.029.25-.03.375a2.625 2.625 0 0 0 5.25 0 2.557 2.557 0 0 0-.053-.496A2.245 2.245 0 0 0 18 12v-.75a3 3 0 0 0-3-3Zm-13.5 0v-3H3v3H1.5Zm3-3H6v3H4.5v-3Zm3 0h2.25v7.5H7.5v-7.5Zm3.75 0h1.5v3h-1.5v-3ZM3 2.25h8.25a1.5 1.5 0 0 1 1.5 1.5H1.5A1.5 1.5 0 0 1 3 2.25Zm-1.5 7.5H6v3H2.25A.75.75 0 0 1 1.5 12V9.75Zm3.75 4.875a1.125 1.125 0 0 1-2.25 0c0-.128.024-.255.07-.375h2.11c.046.12.07.247.07.375Zm8.625 1.125a1.125 1.125 0 0 1-1.125-1.125c0-.128.024-.255.07-.375h2.11c.046.12.07.247.07.375a1.125 1.125 0 0 1-1.125 1.125ZM16.5 12a.75.75 0 0 1-.75.75h-4.5v-3H15a1.5 1.5 0 0 1 1.5 1.5V12Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const SignOut = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <G fill="#4B4F5E" clipPath="url(#a)">
      <Path d="M5.25 16.5h-1.5a2.25 2.25 0 0 1-2.25-2.25V3.75A2.25 2.25 0 0 1 3.75 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5A3.755 3.755 0 0 0 0 3.75v10.5A3.754 3.754 0 0 0 3.75 18h1.5a.75.75 0 1 0 0-1.5Z" />
      <Path d="m13.903 14.03 3.44-3.44a2.255 2.255 0 0 0 0-3.18l-3.44-3.44a.75.75 0 0 0-1.06 1.06l3.219 3.22H4.5a.75.75 0 0 0 0 1.5h11.563l-3.22 3.22a.75.75 0 1 0 1.06 1.06Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const CreditCard = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path fill="#4B4F5E" d="M5.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <Path
      fill="#4B4F5E"
      d="M19 3H5C2.2 3 0 5.2 0 8v8c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V8c0-2.8-2.2-5-5-5ZM5 5h14c1.7 0 3 1.3 3 3H2c0-1.7 1.3-3 3-3Zm14 14H5c-1.7 0-3-1.3-3-3v-6h20v6c0 1.7-1.3 3-3 3Z"
    />
  </Svg>
);

const Security = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <G fill="#4B4F5E" clipPath="url(#a)">
      <Path d="M13.936 1.605 9.237.038a.75.75 0 0 0-.474 0L4.064 1.605A3.745 3.745 0 0 0 1.5 5.162V9c0 5.672 6.9 8.805 7.195 8.935a.75.75 0 0 0 .61 0C9.6 17.805 16.5 14.672 16.5 9V5.162a3.745 3.745 0 0 0-2.564-3.557ZM15 9c0 4.091-4.74 6.775-6 7.417-1.262-.64-6-3.315-6-7.417V5.162a2.25 2.25 0 0 1 1.539-2.134L9 1.54l4.461 1.488A2.25 2.25 0 0 1 15 5.162V9Z" />
      <Path d="m11.475 6.225-3.14 3.15L6.65 7.62a.75.75 0 1 0-1.08 1.04l1.729 1.8a1.403 1.403 0 0 0 1.009.45h.024a1.405 1.405 0 0 0 1.002-.415l3.204-3.204a.752.752 0 1 0-1.064-1.066Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const Close = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </Svg>
);

const Check = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    viewBox="0 -960 960 960"
    {...props}>
    <Path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
  </Svg>
);

const Plus = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.fill || '#fff'}
        d="M16.292 7.792H9.208V.708A.708.708 0 0 0 8.5 0a.708.708 0 0 0-.708.708v7.084H.708A.708.708 0 0 0 0 8.5a.708.708 0 0 0 .708.708h7.084v7.084a.708.708 0 0 0 1.416 0V9.208h7.084a.708.708 0 0 0 0-1.416Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h17v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default {
  Eye,
  EyeOff,
  ArrowLeft,
  Home,
  CloseLock,
  Close,
  OpenLock,
  User,
  LogoIcon,
  Notification,
  Setting,
  Calendar,
  Search,
  Chat,
  DashedLine,
  EmojiSadness,
  DoubleArrowRight,
  CircleOrange,
  CircleBlue,
  DividerVertical,
  Add,
  Hexagon,
  Car,
  SignOut,
  CreditCard,
  Security,
  Check,
  Plus,
};
