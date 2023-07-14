import {
    QRIcon,
    UserIconLogin,
    FacebookIcon,
    GoogleIcon,
    TwitterIcon,
    LINEIcon,
    KakaoTalkIcon,
    InstagramIcon,
} from '~/Icons';

export const DATA_LOGIN = {
    heading: 'Log in to TikTok',
    menu: [
        {
            icon: <QRIcon />,
            content: 'Use QR code',
        },
        {
            icon: <UserIconLogin />,
            content: 'Use phone / email / username',
        },
        {
            icon: <FacebookIcon />,
            content: 'Continue with Facebook',
        },
        {
            icon: <GoogleIcon />,
            content: 'Continue with Google',
        },
        {
            icon: <TwitterIcon />,
            content: 'Continue with Twitter',
        },
        {
            icon: <LINEIcon />,
            content: 'Continue with LINE',
        },
        {
            icon: <KakaoTalkIcon />,
            content: 'Continue with KakaoTalk',
        },
        // {
        //     icon: <AppleIcon />,
        //     content: 'Continue with Apple',
        // },
        {
            icon: <InstagramIcon />,
            content: 'Continue with Instagram',
        },
    ],
    question: "Don't have an account?",
    btnText: 'Sign up',
};

export const DATA_SIGNUP = {
    heading: 'Sign up for TikTok',
    menu: [
        {
            icon: <UserIconLogin />,
            content: 'Use phone / email',
        },
        {
            icon: <FacebookIcon />,
            content: 'Continue with Facebook',
        },
        {
            icon: <GoogleIcon />,
            content: 'Continue with Google',
        },
        {
            icon: <TwitterIcon />,
            content: 'Continue with Twitter',
        },
        {
            icon: <LINEIcon />,
            content: 'Continue with LINE',
        },
        {
            icon: <KakaoTalkIcon />,
            content: 'Continue with KakaoTalk',
        },
    ],
    question: "Already have an account?",
    btnText: 'Log in',
};
