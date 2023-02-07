export default function DensitySvg(count) {
  if (count > 1 && count <= 5) {
    return `
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="22" fill="#FAF7BF"/>
            <circle cx="28" cy="28" r="25" stroke="#6AF26A" stroke-opacity="0.4" stroke-width="6"/>
            <path d="M23.2798 23V31H21.8306V24.4102H21.7837L19.9126 25.6055V24.2773L21.9009 23H23.2798ZM28.9634 26.418V27.582H25.3618V26.418H28.9634ZM33.2163 31.1094C32.6955 31.1094 32.2293 31.0117 31.8179 30.8164C31.4064 30.6185 31.0796 30.3477 30.8374 30.0039C30.5978 29.6602 30.4702 29.2669 30.4546 28.8242H31.8608C31.8869 29.1523 32.0288 29.4206 32.2866 29.6289C32.5444 29.8346 32.8543 29.9375 33.2163 29.9375C33.5002 29.9375 33.7528 29.8724 33.9741 29.7422C34.1955 29.612 34.37 29.431 34.4976 29.1992C34.6252 28.9674 34.6877 28.7031 34.6851 28.4062C34.6877 28.1042 34.6239 27.8359 34.4937 27.6016C34.3634 27.3672 34.1851 27.1836 33.9585 27.0508C33.7319 26.9154 33.4715 26.8477 33.1772 26.8477C32.9377 26.8451 32.702 26.8893 32.4702 26.9805C32.2384 27.0716 32.0549 27.1914 31.9194 27.3398L30.6108 27.125L31.0288 23H35.6694V24.2109H32.228L31.9976 26.332H32.0444C32.1929 26.1576 32.4025 26.013 32.6733 25.8984C32.9442 25.7812 33.241 25.7227 33.564 25.7227C34.0483 25.7227 34.4806 25.8372 34.8608 26.0664C35.241 26.293 35.5405 26.6055 35.7593 27.0039C35.978 27.4023 36.0874 27.8581 36.0874 28.3711C36.0874 28.8997 35.965 29.3711 35.7202 29.7852C35.478 30.1966 35.1408 30.5208 34.7085 30.7578C34.2788 30.9922 33.7814 31.1094 33.2163 31.1094Z" fill="black"/>
        </svg>
        `;
  } else if (count > 5 && count <= 25) {
    return `
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="22" fill="#F9EF75"/>
            <circle cx="28" cy="28" r="25" stroke="#C6EF6D" stroke-opacity="0.4" stroke-width="6"/>
            <path d="M18.7554 31.1094C18.3726 31.1068 17.9989 31.0404 17.6343 30.9102C17.2697 30.7773 16.9416 30.5625 16.6499 30.2656C16.3582 29.9661 16.1265 29.569 15.9546 29.0742C15.7827 28.5768 15.6981 27.9609 15.7007 27.2266C15.7007 26.5417 15.7736 25.931 15.9194 25.3945C16.0653 24.8581 16.2749 24.4049 16.5483 24.0352C16.8218 23.6628 17.1512 23.3789 17.5366 23.1836C17.9246 22.9883 18.3582 22.8906 18.8374 22.8906C19.34 22.8906 19.7853 22.9896 20.1733 23.1875C20.564 23.3854 20.8791 23.6562 21.1187 24C21.3582 24.3411 21.5067 24.7266 21.564 25.1562H20.1382C20.0653 24.849 19.9155 24.6042 19.689 24.4219C19.465 24.237 19.1812 24.1445 18.8374 24.1445C18.2827 24.1445 17.8556 24.3854 17.5562 24.8672C17.2593 25.349 17.1095 26.0104 17.1069 26.8516H17.1616C17.2892 26.6224 17.4546 26.4258 17.6577 26.2617C17.8608 26.0977 18.09 25.9714 18.3452 25.8828C18.603 25.7917 18.8752 25.7461 19.1616 25.7461C19.6304 25.7461 20.0509 25.8581 20.4233 26.082C20.7983 26.306 21.0952 26.6146 21.314 27.0078C21.5327 27.3984 21.6408 27.8464 21.6382 28.3516C21.6408 28.8776 21.521 29.3503 21.2788 29.7695C21.0366 30.1862 20.6994 30.5143 20.2671 30.7539C19.8348 30.9935 19.3309 31.112 18.7554 31.1094ZM18.7476 29.9375C19.0314 29.9375 19.2853 29.8685 19.5093 29.7305C19.7332 29.5924 19.9103 29.4062 20.0405 29.1719C20.1707 28.9375 20.2345 28.6745 20.2319 28.3828C20.2345 28.0964 20.172 27.8372 20.0444 27.6055C19.9194 27.3737 19.7463 27.1901 19.5249 27.0547C19.3035 26.9193 19.0509 26.8516 18.7671 26.8516C18.5562 26.8516 18.3595 26.8919 18.1772 26.9727C17.995 27.0534 17.8361 27.1654 17.7007 27.3086C17.5653 27.4492 17.4585 27.6133 17.3804 27.8008C17.3049 27.9857 17.2658 28.1836 17.2632 28.3945C17.2658 28.6732 17.3309 28.9297 17.4585 29.1641C17.5861 29.3984 17.7619 29.5859 17.9858 29.7266C18.2098 29.8672 18.4637 29.9375 18.7476 29.9375ZM26.6108 26.418V27.582H23.0093V26.418H26.6108ZM27.8032 31V29.9531L30.5806 27.2305C30.8462 26.9622 31.0675 26.724 31.2446 26.5156C31.4217 26.3073 31.5545 26.1055 31.6431 25.9102C31.7316 25.7148 31.7759 25.5065 31.7759 25.2852C31.7759 25.0326 31.7186 24.8164 31.604 24.6367C31.4894 24.4544 31.3319 24.3138 31.1313 24.2148C30.9308 24.1159 30.703 24.0664 30.4478 24.0664C30.1847 24.0664 29.9543 24.1211 29.7563 24.2305C29.5584 24.3372 29.4048 24.4896 29.2954 24.6875C29.1886 24.8854 29.1353 25.1211 29.1353 25.3945H27.7563C27.7563 24.8867 27.8722 24.4453 28.104 24.0703C28.3358 23.6953 28.6548 23.4049 29.061 23.1992C29.4699 22.9935 29.9386 22.8906 30.4673 22.8906C31.0037 22.8906 31.4751 22.9909 31.8813 23.1914C32.2876 23.3919 32.6027 23.6667 32.8267 24.0156C33.0532 24.3646 33.1665 24.763 33.1665 25.2109C33.1665 25.5104 33.1092 25.8047 32.9946 26.0937C32.88 26.3828 32.6782 26.7031 32.3892 27.0547C32.1027 27.4062 31.7004 27.832 31.1821 28.332L29.8032 29.7344V29.7891H33.2876V31H27.8032ZM37.4165 31.1094C36.8957 31.1094 36.4295 31.0117 36.0181 30.8164C35.6066 30.6185 35.2798 30.3477 35.0376 30.0039C34.798 29.6602 34.6704 29.2669 34.6548 28.8242H36.061C36.0871 29.1523 36.229 29.4206 36.4868 29.6289C36.7446 29.8346 37.0545 29.9375 37.4165 29.9375C37.7004 29.9375 37.953 29.8724 38.1743 29.7422C38.3957 29.612 38.5701 29.431 38.6978 29.1992C38.8254 28.9674 38.8879 28.7031 38.8853 28.4062C38.8879 28.1042 38.8241 27.8359 38.6938 27.6016C38.5636 27.3672 38.3853 27.1836 38.1587 27.0508C37.9321 26.9154 37.6717 26.8477 37.3774 26.8477C37.1379 26.8451 36.9022 26.8893 36.6704 26.9805C36.4386 27.0716 36.255 27.1914 36.1196 27.3398L34.811 27.125L35.229 23H39.8696V24.2109H36.4282L36.1978 26.332H36.2446C36.3931 26.1576 36.6027 26.013 36.8735 25.8984C37.1444 25.7812 37.4412 25.7227 37.7642 25.7227C38.2485 25.7227 38.6808 25.8372 39.061 26.0664C39.4412 26.293 39.7407 26.6055 39.9595 27.0039C40.1782 27.4023 40.2876 27.8581 40.2876 28.3711C40.2876 28.8997 40.1652 29.3711 39.9204 29.7852C39.6782 30.1966 39.341 30.5208 38.9087 30.7578C38.479 30.9922 37.9816 31.1094 37.4165 31.1094Z" fill="black"/>
        </svg>
        `;
  } else if (count > 25 && count <= 50) {
    return `
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="28" cy="28" r="22" fill="#F6EC0B"/>
                    <circle cx="28" cy="28" r="25" stroke="#F0C36E" stroke-opacity="0.4" stroke-width="6"/>
                    <path d="M12.1035 31V29.9531L14.8809 27.2305C15.1465 26.9622 15.3678 26.724 15.5449 26.5156C15.722 26.3073 15.8548 26.1055 15.9434 25.9102C16.0319 25.7148 16.0762 25.5065 16.0762 25.2852C16.0762 25.0326 16.0189 24.8164 15.9043 24.6367C15.7897 24.4544 15.6322 24.3138 15.4316 24.2148C15.2311 24.1159 15.0033 24.0664 14.748 24.0664C14.485 24.0664 14.2546 24.1211 14.0566 24.2305C13.8587 24.3372 13.7051 24.4896 13.5957 24.6875C13.4889 24.8854 13.4355 25.1211 13.4355 25.3945H12.0566C12.0566 24.8867 12.1725 24.4453 12.4043 24.0703C12.6361 23.6953 12.9551 23.4049 13.3613 23.1992C13.7702 22.9935 14.2389 22.8906 14.7676 22.8906C15.304 22.8906 15.7754 22.9909 16.1816 23.1914C16.5879 23.3919 16.903 23.6667 17.127 24.0156C17.3535 24.3646 17.4668 24.763 17.4668 25.2109C17.4668 25.5104 17.4095 25.8047 17.2949 26.0937C17.1803 26.3828 16.9785 26.7031 16.6895 27.0547C16.403 27.4062 16.0007 27.832 15.4824 28.332L14.1035 29.7344V29.7891H17.5879V31H12.1035ZM21.7168 31.1094C21.196 31.1094 20.7298 31.0117 20.3184 30.8164C19.9069 30.6185 19.5801 30.3477 19.3379 30.0039C19.0983 29.6602 18.9707 29.2669 18.9551 28.8242H20.3613C20.3874 29.1523 20.5293 29.4206 20.7871 29.6289C21.0449 29.8346 21.3548 29.9375 21.7168 29.9375C22.0007 29.9375 22.2533 29.8724 22.4746 29.7422C22.696 29.612 22.8704 29.431 22.998 29.1992C23.1257 28.9674 23.1882 28.7031 23.1855 28.4062C23.1882 28.1042 23.1243 27.8359 22.9941 27.6016C22.8639 27.3672 22.6855 27.1836 22.459 27.0508C22.2324 26.9154 21.972 26.8477 21.6777 26.8477C21.4382 26.8451 21.2025 26.8893 20.9707 26.9805C20.7389 27.0716 20.5553 27.1914 20.4199 27.3398L19.1113 27.125L19.5293 23H24.1699V24.2109H20.7285L20.498 26.332H20.5449C20.6934 26.1576 20.903 26.013 21.1738 25.8984C21.4447 25.7812 21.7415 25.7227 22.0645 25.7227C22.5488 25.7227 22.9811 25.8372 23.3613 26.0664C23.7415 26.293 24.041 26.6055 24.2598 27.0039C24.4785 27.4023 24.5879 27.8581 24.5879 28.3711C24.5879 28.8997 24.4655 29.3711 24.2207 29.7852C23.9785 30.1966 23.6413 30.5208 23.209 30.7578C22.7793 30.9922 22.2819 31.1094 21.7168 31.1094ZM29.5488 26.418V27.582H25.9473V26.418H29.5488ZM33.8018 31.1094C33.2809 31.1094 32.8148 31.0117 32.4033 30.8164C31.9919 30.6185 31.665 30.3477 31.4229 30.0039C31.1833 29.6602 31.0557 29.2669 31.04 28.8242H32.4463C32.4723 29.1523 32.6143 29.4206 32.8721 29.6289C33.1299 29.8346 33.4398 29.9375 33.8018 29.9375C34.0856 29.9375 34.3382 29.8724 34.5596 29.7422C34.7809 29.612 34.9554 29.431 35.083 29.1992C35.2106 28.9674 35.2731 28.7031 35.2705 28.4062C35.2731 28.1042 35.2093 27.8359 35.0791 27.6016C34.9489 27.3672 34.7705 27.1836 34.5439 27.0508C34.3174 26.9154 34.057 26.8477 33.7627 26.8477C33.5231 26.8451 33.2874 26.8893 33.0557 26.9805C32.8239 27.0716 32.6403 27.1914 32.5049 27.3398L31.1963 27.125L31.6143 23H36.2549V24.2109H32.8135L32.583 26.332H32.6299C32.7783 26.1576 32.988 26.013 33.2588 25.8984C33.5296 25.7812 33.8265 25.7227 34.1494 25.7227C34.6338 25.7227 35.0661 25.8372 35.4463 26.0664C35.8265 26.293 36.126 26.6055 36.3447 27.0039C36.5635 27.4023 36.6729 27.8581 36.6729 28.3711C36.6729 28.8997 36.5505 29.3711 36.3057 29.7852C36.0635 30.1966 35.7262 30.5208 35.2939 30.7578C34.8643 30.9922 34.3669 31.1094 33.8018 31.1094ZM40.9385 31.1523C40.2952 31.1523 39.7432 30.9896 39.2822 30.6641C38.8239 30.3359 38.471 29.8633 38.2236 29.2461C37.9788 28.6263 37.8564 27.8802 37.8564 27.0078C37.859 26.1354 37.9827 25.3932 38.2275 24.7812C38.4749 24.1667 38.8278 23.6979 39.2861 23.375C39.7471 23.0521 40.2979 22.8906 40.9385 22.8906C41.5791 22.8906 42.1299 23.0521 42.5908 23.375C43.0518 23.6979 43.4046 24.1667 43.6494 24.7812C43.8968 25.3958 44.0205 26.138 44.0205 27.0078C44.0205 27.8828 43.8968 28.6302 43.6494 29.25C43.4046 29.8672 43.0518 30.3385 42.5908 30.6641C42.1325 30.9896 41.5817 31.1523 40.9385 31.1523ZM40.9385 29.9297C41.4385 29.9297 41.833 29.6836 42.1221 29.1914C42.4137 28.6966 42.5596 27.9687 42.5596 27.0078C42.5596 26.3724 42.4932 25.8385 42.3604 25.4062C42.2275 24.974 42.04 24.6484 41.7979 24.4297C41.5557 24.2083 41.2692 24.0977 40.9385 24.0977C40.4411 24.0977 40.0479 24.3451 39.7588 24.8398C39.4697 25.332 39.3239 26.0547 39.3213 27.0078C39.3187 27.6458 39.3825 28.1823 39.5127 28.6172C39.6455 29.0521 39.833 29.3802 40.0752 29.6016C40.3174 29.8203 40.6051 29.9297 40.9385 29.9297Z" fill="black"/>
                </svg>
        `;
  } else if (count > 50 && count <= 100) {
    return `
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="25" stroke="#F0944B" stroke-opacity="0.4" stroke-width="6"/>
                    <circle cx="28" cy="28" r="22" fill="#FBAA0E"/>
                    <path d="M12.8276 31.1094C12.3068 31.1094 11.8407 31.0117 11.4292 30.8164C11.0177 30.6185 10.6909 30.3477 10.4487 30.0039C10.2091 29.6602 10.0815 29.2669 10.0659 28.8242H11.4722C11.4982 29.1523 11.6401 29.4206 11.8979 29.6289C12.1558 29.8346 12.4657 29.9375 12.8276 29.9375C13.1115 29.9375 13.3641 29.8724 13.5854 29.7422C13.8068 29.612 13.9813 29.431 14.1089 29.1992C14.2365 28.9674 14.299 28.7031 14.2964 28.4062C14.299 28.1042 14.2352 27.8359 14.105 27.6016C13.9748 27.3672 13.7964 27.1836 13.5698 27.0508C13.3433 26.9154 13.0828 26.8477 12.7886 26.8477C12.549 26.8451 12.3133 26.8893 12.0815 26.9805C11.8498 27.0716 11.6662 27.1914 11.5308 27.3398L10.2222 27.125L10.6401 23H15.2808V24.2109H11.8394L11.6089 26.332H11.6558C11.8042 26.1576 12.0138 26.013 12.2847 25.8984C12.5555 25.7812 12.8524 25.7227 13.1753 25.7227C13.6597 25.7227 14.092 25.8372 14.4722 26.0664C14.8524 26.293 15.1519 26.6055 15.3706 27.0039C15.5894 27.4023 15.6987 27.8581 15.6987 28.3711C15.6987 28.8997 15.5763 29.3711 15.3315 29.7852C15.0894 30.1966 14.7521 30.5208 14.3198 30.7578C13.8901 30.9922 13.3927 31.1094 12.8276 31.1094ZM20.2612 23V31H18.812V24.4102H18.7651L16.894 25.6055V24.2773L18.8823 23H20.2612ZM25.9448 26.418V27.582H22.3433V26.418H25.9448ZM30.6704 23V31H29.2212V24.4102H29.1743L27.3032 25.6055V24.2773L29.2915 23H30.6704ZM35.6587 31.1523C35.0155 31.1523 34.4634 30.9896 34.0024 30.6641C33.5441 30.3359 33.1912 29.8633 32.9438 29.2461C32.6991 28.6263 32.5767 27.8802 32.5767 27.0078C32.5793 26.1354 32.703 25.3932 32.9478 24.7812C33.1951 24.1667 33.548 23.6979 34.0063 23.375C34.4673 23.0521 35.0181 22.8906 35.6587 22.8906C36.2993 22.8906 36.8501 23.0521 37.311 23.375C37.772 23.6979 38.1248 24.1667 38.3696 24.7812C38.617 25.3958 38.7407 26.138 38.7407 27.0078C38.7407 27.8828 38.617 28.6302 38.3696 29.25C38.1248 29.8672 37.772 30.3385 37.311 30.6641C36.8527 30.9896 36.3019 31.1523 35.6587 31.1523ZM35.6587 29.9297C36.1587 29.9297 36.5532 29.6836 36.8423 29.1914C37.134 28.6966 37.2798 27.9687 37.2798 27.0078C37.2798 26.3724 37.2134 25.8385 37.0806 25.4062C36.9478 24.974 36.7603 24.6484 36.5181 24.4297C36.2759 24.2083 35.9894 24.0977 35.6587 24.0977C35.1613 24.0977 34.7681 24.3451 34.479 24.8398C34.1899 25.332 34.0441 26.0547 34.0415 27.0078C34.0389 27.6458 34.1027 28.1823 34.2329 28.6172C34.3657 29.0521 34.5532 29.3802 34.7954 29.6016C35.0376 29.8203 35.3254 29.9297 35.6587 29.9297ZM42.9956 31.1523C42.3524 31.1523 41.8003 30.9896 41.3394 30.6641C40.881 30.3359 40.5282 29.8633 40.2808 29.2461C40.036 28.6263 39.9136 27.8802 39.9136 27.0078C39.9162 26.1354 40.0399 25.3932 40.2847 24.7812C40.5321 24.1667 40.8849 23.6979 41.3433 23.375C41.8042 23.0521 42.355 22.8906 42.9956 22.8906C43.6362 22.8906 44.187 23.0521 44.6479 23.375C45.1089 23.6979 45.4618 24.1667 45.7065 24.7812C45.9539 25.3958 46.0776 26.138 46.0776 27.0078C46.0776 27.8828 45.9539 28.6302 45.7065 29.25C45.4618 29.8672 45.1089 30.3385 44.6479 30.6641C44.1896 30.9896 43.6388 31.1523 42.9956 31.1523ZM42.9956 29.9297C43.4956 29.9297 43.8901 29.6836 44.1792 29.1914C44.4709 28.6966 44.6167 27.9687 44.6167 27.0078C44.6167 26.3724 44.5503 25.8385 44.4175 25.4062C44.2847 24.974 44.0972 24.6484 43.855 24.4297C43.6128 24.2083 43.3263 24.0977 42.9956 24.0977C42.4982 24.0977 42.105 24.3451 41.8159 24.8398C41.5269 25.332 41.381 26.0547 41.3784 27.0078C41.3758 27.6458 41.4396 28.1823 41.5698 28.6172C41.7026 29.0521 41.8901 29.3802 42.1323 29.6016C42.3745 29.8203 42.6623 29.9297 42.9956 29.9297Z" fill="black"/>
                </svg>
        `;
  } else if (count > 100 && count <= 500) {
    return `
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="22" fill="#F0691C"/>
                    <circle cx="28" cy="28" r="25" stroke="#F0944B" stroke-opacity="0.4" stroke-width="6"/>
                    <path d="M10.1318 23V31H8.68262V24.4102H8.63574L6.76465 25.6055V24.2773L8.75293 23H10.1318ZM15.1201 31.1523C14.4769 31.1523 13.9248 30.9896 13.4639 30.6641C13.0055 30.3359 12.6527 29.8633 12.4053 29.2461C12.1605 28.6263 12.0381 27.8802 12.0381 27.0078C12.0407 26.1354 12.1644 25.3932 12.4092 24.7812C12.6566 24.1667 13.0094 23.6979 13.4678 23.375C13.9287 23.0521 14.4795 22.8906 15.1201 22.8906C15.7607 22.8906 16.3115 23.0521 16.7725 23.375C17.2334 23.6979 17.5863 24.1667 17.8311 24.7812C18.0785 25.3958 18.2021 26.138 18.2021 27.0078C18.2021 27.8828 18.0785 28.6302 17.8311 29.25C17.5863 29.8672 17.2334 30.3385 16.7725 30.6641C16.3141 30.9896 15.7633 31.1523 15.1201 31.1523ZM15.1201 29.9297C15.6201 29.9297 16.0146 29.6836 16.3037 29.1914C16.5954 28.6966 16.7412 27.9687 16.7412 27.0078C16.7412 26.3724 16.6748 25.8385 16.542 25.4062C16.4092 24.974 16.2217 24.6484 15.9795 24.4297C15.7373 24.2083 15.4508 24.0977 15.1201 24.0977C14.6227 24.0977 14.2295 24.3451 13.9404 24.8398C13.6514 25.332 13.5055 26.0547 13.5029 27.0078C13.5003 27.6458 13.5641 28.1823 13.6943 28.6172C13.8271 29.0521 14.0146 29.3802 14.2568 29.6016C14.499 29.8203 14.7868 29.9297 15.1201 29.9297ZM22.7539 23V31H21.3047V24.4102H21.2578L19.3867 25.6055V24.2773L21.375 23H22.7539ZM28.4375 26.418V27.582H24.8359V26.418H28.4375ZM32.6904 31.1094C32.1696 31.1094 31.7035 31.0117 31.292 30.8164C30.8805 30.6185 30.5537 30.3477 30.3115 30.0039C30.0719 29.6602 29.9443 29.2669 29.9287 28.8242H31.335C31.361 29.1523 31.5029 29.4206 31.7607 29.6289C32.0186 29.8346 32.3285 29.9375 32.6904 29.9375C32.9743 29.9375 33.2269 29.8724 33.4482 29.7422C33.6696 29.612 33.8441 29.431 33.9717 29.1992C34.0993 28.9674 34.1618 28.7031 34.1592 28.4062C34.1618 28.1042 34.098 27.8359 33.9678 27.6016C33.8376 27.3672 33.6592 27.1836 33.4326 27.0508C33.2061 26.9154 32.9456 26.8477 32.6514 26.8477C32.4118 26.8451 32.1761 26.8893 31.9443 26.9805C31.7126 27.0716 31.529 27.1914 31.3936 27.3398L30.085 27.125L30.5029 23H35.1436V24.2109H31.7021L31.4717 26.332H31.5186C31.667 26.1576 31.8766 26.013 32.1475 25.8984C32.4183 25.7812 32.7152 25.7227 33.0381 25.7227C33.5225 25.7227 33.9548 25.8372 34.335 26.0664C34.7152 26.293 35.0146 26.6055 35.2334 27.0039C35.4521 27.4023 35.5615 27.8581 35.5615 28.3711C35.5615 28.8997 35.4391 29.3711 35.1943 29.7852C34.9521 30.1966 34.6149 30.5208 34.1826 30.7578C33.7529 30.9922 33.2555 31.1094 32.6904 31.1094ZM39.8271 31.1523C39.1839 31.1523 38.6318 30.9896 38.1709 30.6641C37.7126 30.3359 37.3597 29.8633 37.1123 29.2461C36.8675 28.6263 36.7451 27.8802 36.7451 27.0078C36.7477 26.1354 36.8714 25.3932 37.1162 24.7812C37.3636 24.1667 37.7165 23.6979 38.1748 23.375C38.6357 23.0521 39.1865 22.8906 39.8271 22.8906C40.4678 22.8906 41.0186 23.0521 41.4795 23.375C41.9404 23.6979 42.2933 24.1667 42.5381 24.7812C42.7855 25.3958 42.9092 26.138 42.9092 27.0078C42.9092 27.8828 42.7855 28.6302 42.5381 29.25C42.2933 29.8672 41.9404 30.3385 41.4795 30.6641C41.0212 30.9896 40.4704 31.1523 39.8271 31.1523ZM39.8271 29.9297C40.3271 29.9297 40.7217 29.6836 41.0107 29.1914C41.3024 28.6966 41.4482 27.9687 41.4482 27.0078C41.4482 26.3724 41.3818 25.8385 41.249 25.4062C41.1162 24.974 40.9287 24.6484 40.6865 24.4297C40.4443 24.2083 40.1579 24.0977 39.8271 24.0977C39.3298 24.0977 38.9365 24.3451 38.6475 24.8398C38.3584 25.332 38.2126 26.0547 38.21 27.0078C38.2074 27.6458 38.2712 28.1823 38.4014 28.6172C38.5342 29.0521 38.7217 29.3802 38.9639 29.6016C39.2061 29.8203 39.4938 29.9297 39.8271 29.9297ZM47.1641 31.1523C46.5208 31.1523 45.9688 30.9896 45.5078 30.6641C45.0495 30.3359 44.6966 29.8633 44.4492 29.2461C44.2044 28.6263 44.082 27.8802 44.082 27.0078C44.0846 26.1354 44.2083 25.3932 44.4531 24.7812C44.7005 24.1667 45.0534 23.6979 45.5117 23.375C45.9727 23.0521 46.5234 22.8906 47.1641 22.8906C47.8047 22.8906 48.3555 23.0521 48.8164 23.375C49.2773 23.6979 49.6302 24.1667 49.875 24.7812C50.1224 25.3958 50.2461 26.138 50.2461 27.0078C50.2461 27.8828 50.1224 28.6302 49.875 29.25C49.6302 29.8672 49.2773 30.3385 48.8164 30.6641C48.3581 30.9896 47.8073 31.1523 47.1641 31.1523ZM47.1641 29.9297C47.6641 29.9297 48.0586 29.6836 48.3477 29.1914C48.6393 28.6966 48.7852 27.9687 48.7852 27.0078C48.7852 26.3724 48.7188 25.8385 48.5859 25.4062C48.4531 24.974 48.2656 24.6484 48.0234 24.4297C47.7813 24.2083 47.4948 24.0977 47.1641 24.0977C46.6667 24.0977 46.2734 24.3451 45.9844 24.8398C45.6953 25.332 45.5495 26.0547 45.5469 27.0078C45.5443 27.6458 45.6081 28.1823 45.7383 28.6172C45.8711 29.0521 46.0586 29.3802 46.3008 29.6016C46.543 29.8203 46.8307 29.9297 47.1641 29.9297Z" fill="black"/>
                </svg>
        `;
  } else {
    return `
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="22" fill="#CFCECD"/>
                    <circle cx="28" cy="28" r="25" stroke="#6AF26A" stroke-opacity="0.4" stroke-width="6"/>
                    <path d="M27.9995 31.1523C27.3563 31.1523 26.8042 30.9896 26.3433 30.6641C25.8849 30.3359 25.5321 29.8633 25.2847 29.2461C25.0399 28.6263 24.9175 27.8802 24.9175 27.0078C24.9201 26.1354 25.0438 25.3932 25.2886 24.7812C25.536 24.1667 25.8888 23.6979 26.3472 23.375C26.8081 23.0521 27.3589 22.8906 27.9995 22.8906C28.6401 22.8906 29.1909 23.0521 29.6519 23.375C30.1128 23.6979 30.4657 24.1667 30.7104 24.7812C30.9578 25.3958 31.0815 26.138 31.0815 27.0078C31.0815 27.8828 30.9578 28.6302 30.7104 29.25C30.4657 29.8672 30.1128 30.3385 29.6519 30.6641C29.1935 30.9896 28.6427 31.1523 27.9995 31.1523ZM27.9995 29.9297C28.4995 29.9297 28.894 29.6836 29.1831 29.1914C29.4748 28.6966 29.6206 27.9687 29.6206 27.0078C29.6206 26.3724 29.5542 25.8385 29.4214 25.4062C29.2886 24.974 29.1011 24.6484 28.8589 24.4297C28.6167 24.2083 28.3302 24.0977 27.9995 24.0977C27.5021 24.0977 27.1089 24.3451 26.8198 24.8398C26.5308 25.332 26.3849 26.0547 26.3823 27.0078C26.3797 27.6458 26.4435 28.1823 26.5737 28.6172C26.7065 29.0521 26.894 29.3802 27.1362 29.6016C27.3784 29.8203 27.6662 29.9297 27.9995 29.9297Z" fill="black"/>
                </svg>
        `;
  }
}