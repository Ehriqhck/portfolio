import * as React from "react"
const DecoyIcon = (props) => (
  <svg width={props.width} height={props.height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1776 2.28058C17.9979 2.10086 17.7542 1.99989 17.5 1.99989C17.2458 1.99989 17.0021 2.10086 16.8224 2.28058C16.6426 2.4603 16.5417 2.70406 16.5417 2.95823V12.7083C16.5417 12.9625 16.6426 13.2063 16.8224 13.386C17.0021 13.5657 17.2458 13.6667 17.5 13.6667C17.7542 13.6667 17.9979 13.5657 18.1776 13.386C18.3574 13.2063 18.4583 12.9625 18.4583 12.7083V2.95823C18.4583 2.70406 18.3574 2.4603 18.1776 2.28058ZM13.1227 11.8639C13.2396 11.9142 13.3454 11.9872 13.4338 12.0787L14.7898 13.4338C14.9697 13.6136 15.0707 13.8575 15.0707 14.1118C15.0707 14.3661 14.9697 14.61 14.7898 14.7898C14.61 14.9697 14.3661 15.0707 14.1118 15.0707C13.8575 15.0707 13.6136 14.9697 13.4338 14.7898L12.0787 13.4338C11.9872 13.3454 11.9142 13.2396 11.8639 13.1227C11.8137 13.0058 11.7873 12.88 11.7862 12.7528C11.7851 12.6256 11.8093 12.4994 11.8575 12.3816C11.9057 12.2638 11.9768 12.1568 12.0668 12.0668C12.1568 11.9768 12.2638 11.9057 12.3816 11.8575C12.4994 11.8093 12.6256 11.7851 12.7528 11.7862C12.88 11.7873 13.0058 11.8137 13.1227 11.8639ZM1.99988 16.8224C2.17961 16.6426 2.42336 16.5417 2.67753 16.5417H12.7083C12.9625 16.5417 13.2063 16.6426 13.386 16.8224C13.5657 17.0021 13.6667 17.2458 13.6667 17.5C13.6667 17.7542 13.5657 17.9979 13.386 18.1776C13.2063 18.3574 12.9625 18.4583 12.7083 18.4583H2.67753C2.42336 18.4583 2.17961 18.3574 1.99988 18.1776C1.82016 17.9979 1.71919 17.7542 1.71919 17.5C1.71919 17.2458 1.82016 17.0021 1.99988 16.8224ZM21.614 16.8224C21.4343 17.0021 21.3333 17.2458 21.3333 17.5C21.3333 17.7542 21.4343 17.9979 21.614 18.1776C21.7937 18.3574 22.0375 18.4583 22.2917 18.4583H28.0417C28.2958 18.4583 28.5396 18.3574 28.7193 18.1776C28.899 17.9979 29 17.7542 29 17.5C29 17.2458 28.899 17.0021 28.7193 16.8224C28.5396 16.6426 28.2958 16.5417 28.0417 16.5417H22.2917C22.0375 16.5417 21.7937 16.6426 21.614 16.8224ZM18.1776 21.614C17.9979 21.4343 17.7542 21.3333 17.5 21.3333C17.2458 21.3333 17.0021 21.4343 16.8224 21.614C16.6426 21.7937 16.5417 22.0375 16.5417 22.2917V28.0417C16.5417 28.2958 16.6426 28.5396 16.8224 28.7193C17.0021 28.899 17.2458 29 17.5 29C17.7542 29 17.9979 28.899 18.1776 28.7193C18.3574 28.5396 18.4583 28.2958 18.4583 28.0417V22.2917C18.4583 22.0375 18.3574 21.7937 18.1776 21.614ZM20.5212 20.0022C20.4049 20.0504 20.2992 20.1211 20.2102 20.2102C20.1211 20.2992 20.0504 20.4049 20.0022 20.5212C19.9539 20.6375 19.9291 20.7623 19.9291 20.8882C19.9291 21.0141 19.9539 21.1388 20.0022 21.2552C20.0504 21.3715 20.1211 21.4772 20.2102 21.5662L21.5662 22.9213C21.6546 23.0128 21.7604 23.0858 21.8773 23.1361C21.9942 23.1863 22.1199 23.2127 22.2472 23.2138C22.3744 23.2149 22.5006 23.1907 22.6184 23.1425C22.7362 23.0943 22.8432 23.0232 22.9332 22.9332C23.0231 22.8432 23.0943 22.7362 23.1425 22.6184C23.1907 22.5006 23.2149 22.3744 23.2138 22.2472C23.2127 22.12 23.1863 21.9942 23.1361 21.8773C23.0858 21.7604 23.0128 21.6546 22.9213 21.5662L21.5662 20.2102C21.4772 20.1211 21.3715 20.0504 21.2552 20.0022C21.1388 19.9539 21.0141 19.9291 20.8882 19.9291C20.7622 19.9291 20.6375 19.9539 20.5212 20.0022ZM23.1361 13.1227C23.0858 13.2396 23.0128 13.3454 22.9213 13.4338L21.5662 14.7898C21.3864 14.9697 21.1425 15.0707 20.8882 15.0707C20.6339 15.0707 20.39 14.9697 20.2102 14.7898C20.0303 14.61 19.9293 14.3661 19.9293 14.1118C19.9293 13.8575 20.0303 13.6136 20.2102 13.4338L21.5662 12.0787C21.6546 11.9872 21.7604 11.9142 21.8773 11.8639C21.9942 11.8137 22.1199 11.7873 22.2472 11.7862C22.3744 11.7851 22.5006 11.8093 22.6184 11.8575C22.7362 11.9057 22.8432 11.9768 22.9332 12.0668C23.0231 12.1568 23.0943 12.2638 23.1425 12.3816C23.1907 12.4994 23.2149 12.6256 23.2138 12.7528C23.2127 12.88 23.1863 13.0058 23.1361 13.1227ZM15.0707 20.8882C15.0707 21.1425 14.9697 21.3864 14.7898 21.5662L13.4338 22.9213C13.3454 23.0128 13.2396 23.0858 13.1227 23.1361C13.0058 23.1863 12.88 23.2127 12.7528 23.2138C12.6256 23.2149 12.4994 23.1907 12.3816 23.1425C12.2638 23.0943 12.1568 23.0232 12.0668 22.9332C11.9768 22.8432 11.9057 22.7362 11.8575 22.6184C11.8093 22.5006 11.7851 22.3744 11.7862 22.2472C11.7873 22.12 11.8137 21.9942 11.8639 21.8773C11.9142 21.7604 11.9872 21.6546 12.0787 21.5662L13.4338 20.2102C13.6136 20.0303 13.8575 19.9293 14.1118 19.9293C14.3661 19.9293 14.61 20.0303 14.7898 20.2102C14.9697 20.39 15.0707 20.6339 15.0707 20.8882Z" fill="#FFB800" />
      <path d="M17.5 14.625C16.7375 14.625 16.0062 14.9279 15.4671 15.4671C14.9279 16.0062 14.625 16.7375 14.625 17.5C14.625 18.2625 14.9279 18.9938 15.4671 19.5329C16.0062 20.0721 16.7375 20.375 17.5 20.375C18.2625 20.375 18.9938 20.0721 19.5329 19.5329C20.0721 18.9938 20.375 18.2625 20.375 17.5C20.375 16.7375 20.0721 16.0062 19.5329 15.4671C18.9938 14.9279 18.2625 14.625 17.5 14.625Z" fill="#FF5C00" />
      <path d="M12.2809 2.85923L7.55761 4.43044L6.38464 3.25988C5.77547 2.65196 5.06305 2.17689 4.26715 1.84791C3.52905 1.54281 2.75271 1.37743 1.95674 1.355L0.722879 0.123575C0.557798 -0.0411798 0.301612 -0.0411922 0.136518 0.123547C-0.0454952 0.30517 -0.0455077 0.613652 0.136491 0.795292L1.327 1.98345C1.3495 2.77775 1.51522 3.55259 1.82092 4.28912C2.1506 5.08339 2.62662 5.79439 3.23579 6.40228L4.40879 7.57287L2.83432 12.2865C2.40948 11.8625 1.99789 11.4518 1.68673 11.1413C1.59191 11.0467 1.50641 10.9613 1.43271 10.8878C1.26761 10.723 1.01148 10.7231 0.846384 10.8878C0.664372 11.0695 0.663779 11.3774 0.845792 11.559C1.56994 12.2817 3.26915 13.9773 3.97386 14.6803C4.15117 14.8572 4.42628 14.8572 4.60357 14.6802L6.80755 12.4807L8.06602 13.7366L8.11999 13.6828C8.18468 13.8181 8.27265 13.9428 8.38202 14.052C8.50534 14.175 8.64895 14.2714 8.80887 14.3385L8.83583 14.3498L11.2213 15L10.5698 12.6194L10.5585 12.5925C10.4913 12.4329 10.3947 12.2896 10.2714 12.1665C10.1606 12.0559 10.0349 11.9691 9.90086 11.9056L9.95539 11.8511L8.69692 10.5952L9.32669 9.96677L9.95646 10.5952L10.5862 9.96677L9.95646 9.33829L10.5862 8.70981L11.8447 9.96567L11.8992 9.91125C11.9629 10.045 12.0499 10.1705 12.1607 10.281C12.284 10.4041 12.4276 10.5005 12.5875 10.5675L12.6145 10.5788L15 11.229L14.3484 8.84838L14.3371 8.82148C14.2699 8.66187 14.1733 8.51854 14.05 8.39553C13.9407 8.28638 13.8157 8.19859 13.6801 8.13404L13.734 8.0802L12.4756 6.82431C13.1354 6.16591 14.1784 5.12502 14.5457 4.75859C14.7886 4.51631 14.7886 4.10473 14.5458 3.8624L11.5092 0.832053C11.3441 0.667294 11.0879 0.667294 10.9228 0.832053C10.7408 1.01369 10.7408 1.32218 10.9228 1.50382L12.2809 2.85923ZM9.64156 12.795C9.67704 12.8304 9.70584 12.8706 9.72733 12.9147L9.95112 13.7324L9.13179 13.5091C9.08755 13.4876 9.04727 13.4589 9.01179 13.4235C8.92768 13.3395 8.88134 13.2279 8.88134 13.1092C8.88134 12.9905 8.92768 12.8789 9.01179 12.795C9.18541 12.6217 9.46795 12.6217 9.64156 12.795ZM13.4202 9.02407C13.4557 9.05947 13.4845 9.09964 13.506 9.14382L13.7298 9.9615L12.9105 9.73817C12.8662 9.71669 12.826 9.68798 12.7905 9.65257C12.6168 9.47929 12.6168 9.19735 12.7905 9.02407C12.8746 8.94013 12.9864 8.89388 13.1053 8.89388C13.2243 8.89388 13.3361 8.9401 13.4202 9.02407ZM4.28864 13.7376C4.07103 13.5205 3.81248 13.2625 3.53849 12.9891L5.1129 8.27557L6.23202 9.39239C6.09851 9.45585 5.97334 9.54242 5.86297 9.65258C5.61059 9.90438 5.47162 10.2392 5.47162 10.5953C5.47162 10.9514 5.61059 11.2862 5.86291 11.538L6.17781 11.8523L4.28864 13.7376ZM7.12236 10.2809L8.69582 11.8512L8.06605 12.4797L6.49271 10.9095C6.4086 10.8256 6.36229 10.714 6.36229 10.5953C6.36229 10.4766 6.4086 10.365 6.49271 10.2811C6.66629 10.1078 6.94871 10.1078 7.12236 10.2809ZM9.32669 8.70984L8.69692 8.08136L8.06715 8.70984L8.69692 9.33832L8.06715 9.9668L3.86556 5.77383C2.91112 4.82134 2.34114 3.58737 2.2334 2.25955C3.56396 2.36703 4.80046 2.93587 5.75487 3.88836L9.95646 8.08136L9.32669 8.70984ZM10.9011 6.51012L12.4745 8.08026L11.8447 8.70874L10.2714 7.13863C10.0977 6.96534 10.0977 6.68341 10.2714 6.51015C10.3555 6.42621 10.4673 6.37999 10.5862 6.37999C10.7052 6.37999 10.817 6.42618 10.9011 6.51012ZM13.7352 4.31051L11.8458 6.19589L11.5309 5.88164C11.2786 5.62981 10.9431 5.49115 10.5862 5.49115C10.2294 5.49115 9.89385 5.62984 9.64153 5.88164C9.53115 5.99179 9.4444 6.1167 9.38081 6.24993L8.26169 5.13311L12.985 3.5619L13.7352 4.31051Z" fill="#0AFFB5" />
      <path d="M9.32669 8.70984L8.69692 8.08136L8.06715 8.70984L8.69692 9.33832L8.06715 9.9668L3.86556 5.77383C2.91112 4.82134 2.34114 3.58737 2.2334 2.25955C3.56396 2.36703 4.80046 2.93587 5.75487 3.88836L9.95646 8.08136L9.32669 8.70984Z" fill="#006654" />
      <path d="M4.28864 13.7376L3.53849 12.9891L5.1129 8.27557L6.23202 9.39239C6.09851 9.45585 5.97334 9.54242 5.86297 9.65258C5.61059 9.90438 5.47162 10.2392 5.47162 10.5953C5.47162 10.9514 5.61059 11.2862 5.86291 11.538L6.17781 11.8523L4.28864 13.7376Z" fill="#006654" />
      <path d="M13.7352 4.31051L11.8458 6.19589L11.5309 5.88164C11.2786 5.62981 10.9431 5.49115 10.5862 5.49115C10.2294 5.49115 9.89385 5.62984 9.64153 5.88164C9.53115 5.99179 9.4444 6.1167 9.38081 6.24993L8.26169 5.13311L12.985 3.5619L13.7352 4.31051Z" fill="#006654" />
      <path d="M10.9011 6.51012L12.4745 8.08026L11.8447 8.70874L10.2714 7.13863C10.0977 6.96534 10.0977 6.68341 10.2714 6.51015C10.3555 6.42621 10.4673 6.37999 10.5862 6.37999C10.7052 6.37999 10.817 6.42618 10.9011 6.51012Z" fill="#006654" />
      <path d="M13.4202 9.02407C13.4557 9.05947 13.4845 9.09964 13.506 9.14382L13.7298 9.9615L12.9105 9.73817C12.8662 9.71669 12.826 9.68798 12.7905 9.65257C12.6168 9.47929 12.6168 9.19735 12.7905 9.02407C12.8746 8.94013 12.9864 8.89388 13.1053 8.89388C13.2243 8.89388 13.3361 8.9401 13.4202 9.02407Z" fill="#006654" />
      <path d="M9.64156 12.795C9.67704 12.8304 9.70584 12.8706 9.72733 12.9147L9.95112 13.7324L9.13179 13.5091C9.08755 13.4876 9.04727 13.4589 9.01179 13.4235C8.92768 13.3395 8.88134 13.2279 8.88134 13.1092C8.88134 12.9905 8.92768 12.8789 9.01179 12.795C9.18541 12.6217 9.46795 12.6217 9.64156 12.795Z" fill="#006654" />
      <path d="M7.12236 10.2809L8.69582 11.8512L8.06605 12.4797L6.49271 10.9095C6.4086 10.8256 6.36229 10.714 6.36229 10.5953C6.36229 10.4766 6.4086 10.365 6.49271 10.2811C6.66629 10.1078 6.94871 10.1078 7.12236 10.2809Z" fill="#006654" />
    </g>

  </svg>
)
export default DecoyIcon