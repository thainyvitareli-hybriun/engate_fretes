// @ts-nocheck
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Original = props => (
  <Svg
    width={255}
    height={58}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M70.396 16.065c2.085 2.276 3.11 5.377 3.11 9.335v17.45h-9.134V26.62c0-2.011-.53-3.562-1.555-4.65-1.026-1.089-2.45-1.65-4.17-1.65-1.754 0-3.144.561-4.17 1.65-1.026 1.121-1.556 2.672-1.556 4.65v16.198h-9.167V3.266h9.167V17.02c.927-1.319 2.185-2.375 3.806-3.166 1.622-.792 3.41-1.188 5.428-1.188 3.442 0 6.189 1.155 8.24 3.398ZM110.509 12.997 91.744 57.003H81.88l6.884-15.175-12.18-28.83h10.26l6.851 18.67 6.884-18.67h9.929ZM126.693 13.855c1.621-.858 3.441-1.287 5.526-1.287 2.483 0 4.7.627 6.719 1.88 2.019 1.254 3.574 3.035 4.766 5.345 1.158 2.309 1.754 5.014 1.754 8.082 0 3.067-.596 5.772-1.754 8.114-1.159 2.343-2.747 4.124-4.766 5.41a12.455 12.455 0 0 1-6.719 1.914c-2.118 0-3.938-.43-5.526-1.254-1.589-.825-2.814-1.946-3.707-3.332v4.157h-9.168V3.266h9.168v13.953c.86-1.385 2.118-2.507 3.707-3.364Zm7.512 8.642c-1.257-1.286-2.846-1.946-4.699-1.946-1.821 0-3.376.66-4.634 1.98-1.257 1.319-1.919 3.133-1.919 5.41 0 2.276.629 4.09 1.919 5.41 1.258 1.319 2.813 1.979 4.634 1.979 1.82 0 3.375-.66 4.666-2.013 1.291-1.352 1.92-3.133 1.92-5.442 0-2.277-.629-4.091-1.887-5.378ZM163.461 14.086c1.622-.956 3.409-1.418 5.361-1.418v9.665h-2.515c-2.283 0-4.004.495-5.163 1.485-1.158.99-1.721 2.705-1.721 5.146v13.855h-9.167V12.998h9.167v4.981c1.092-1.65 2.416-2.936 4.038-3.893ZM173.886 8.478c-1.026-.957-1.523-2.111-1.523-3.497 0-1.418.497-2.606 1.523-3.563C174.912.462 176.235 0 177.824 0s2.879.462 3.905 1.418c1.026.957 1.523 2.145 1.523 3.563 0 1.386-.497 2.573-1.523 3.497-1.026.956-2.316 1.418-3.905 1.418s-2.912-.462-3.938-1.418Zm8.505 4.52V42.85h-9.167V12.997h9.167ZM218.63 12.997v29.854h-9.168v-4.057c-.927 1.319-2.184 2.375-3.773 3.166-1.588.792-3.342 1.188-5.295 1.188-2.284 0-4.302-.495-6.056-1.518-1.755-1.022-3.111-2.474-4.071-4.42-.96-1.913-1.456-4.19-1.456-6.795V12.997h9.101v16.197c0 2.012.529 3.563 1.555 4.651 1.026 1.122 2.416 1.65 4.17 1.65 1.787 0 3.211-.561 4.237-1.65 1.026-1.088 1.555-2.672 1.555-4.651V12.997h9.201ZM251.857 16.066c2.085 2.276 3.144 5.377 3.144 9.335v17.45h-9.134v-16.23c0-2.011-.53-3.562-1.556-4.65-1.026-1.09-2.449-1.65-4.17-1.65-1.754 0-3.144.56-4.17 1.65-1.026 1.121-1.555 2.671-1.555 4.65V42.82h-9.168V12.998h9.168v3.958c.926-1.32 2.184-2.375 3.739-3.133 1.589-.76 3.343-1.155 5.329-1.155 3.475 0 6.288 1.155 8.373 3.398ZM10.16 32.592h10.028c5.527 0 10.028-4.486 10.028-9.995V12.568H20.188c-5.527 0-10.028 4.487-10.028 9.996v10.028ZM10.028 42.752H0v-9.995c5.527 0 10.028 4.453 10.028 9.995Z"
      fill="#127DFD"
    />
  </Svg>
);
const Small = props => (
  <Svg
    width={132}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M36.163 8.253c1.072 1.17 1.599 2.762 1.599 4.796v8.965h-4.693v-8.338c0-1.034-.272-1.83-.8-2.39-.526-.559-1.257-.847-2.141-.847-.901 0-1.616.288-2.143.848-.527.576-.799 1.372-.799 2.39v8.32h-4.71V1.677h4.71v7.068c.476-.678 1.122-1.22 1.956-1.627.833-.407 1.75-.61 2.788-.61 1.768 0 3.18.593 4.233 1.745ZM56.771 6.677l-9.64 22.607h-5.067l3.537-7.796-6.257-14.811h5.27l3.52 9.592 3.536-9.592h5.101ZM65.085 7.118c.833-.44 1.768-.661 2.839-.661 1.275 0 2.414.322 3.451.966 1.038.644 1.837 1.559 2.449 2.745.595 1.186.9 2.576.9 4.152s-.305 2.966-.9 4.17c-.595 1.202-1.411 2.118-2.448 2.778a6.399 6.399 0 0 1-3.452.983c-1.088 0-2.023-.22-2.84-.644a4.907 4.907 0 0 1-1.904-1.711v2.135h-4.71V1.678h4.71v7.168c.442-.711 1.089-1.288 1.905-1.728Zm3.86 4.44c-.647-.661-1.463-1-2.415-1-.935 0-1.734.339-2.38 1.017-.647.678-.987 1.61-.987 2.779 0 1.17.323 2.102.987 2.78a3.169 3.169 0 0 0 2.38 1.016c.935 0 1.734-.339 2.397-1.034.663-.694.986-1.61.986-2.796 0-1.17-.323-2.101-.969-2.762ZM83.973 7.238c.834-.492 1.752-.73 2.755-.73v4.966h-1.292c-1.174 0-2.058.254-2.653.763-.595.508-.884 1.39-.884 2.644v7.117h-4.71V6.678h4.71v2.56c.561-.848 1.241-1.509 2.074-2ZM89.329 4.355a2.347 2.347 0 0 1-.782-1.796c0-.729.255-1.339.782-1.83C89.856.237 90.536 0 91.352 0c.816 0 1.48.237 2.007.729.527.491.782 1.101.782 1.83 0 .712-.255 1.322-.782 1.796-.527.492-1.19.73-2.007.73-.816 0-1.496-.238-2.023-.73Zm4.37 2.322v15.337h-4.71V6.677h4.71ZM112.317 6.677v15.337h-4.71v-2.085c-.476.678-1.122 1.22-1.938 1.627-.816.407-1.717.61-2.72.61-1.173 0-2.21-.254-3.112-.78-.9-.525-1.598-1.27-2.09-2.27-.494-.983-.749-2.152-.749-3.491V6.677h4.676v8.32c0 1.035.272 1.831.799 2.39.527.576 1.241.848 2.142.848.918 0 1.649-.288 2.176-.848.527-.559.799-1.372.799-2.39v-8.32h4.727ZM129.387 8.254c1.071 1.17 1.615 2.763 1.615 4.796v8.965h-4.693v-8.338c0-1.033-.272-1.83-.799-2.39-.527-.558-1.258-.847-2.142-.847-.901 0-1.615.289-2.142.848-.528.576-.8 1.373-.8 2.39v8.32h-4.709V6.678h4.709v2.034a4.979 4.979 0 0 1 1.922-1.61c.816-.39 1.717-.593 2.737-.593 1.785 0 3.231.593 4.302 1.745ZM5.22 16.743h5.152c2.84 0 5.152-2.305 5.152-5.135V6.456h-5.152c-2.839 0-5.151 2.305-5.151 5.135v5.152ZM5.152 21.963H0v-5.135c2.84 0 5.152 2.288 5.152 5.135Z"
      fill="#127DFD"
    />
  </Svg>
);

export default {Original, Small};
