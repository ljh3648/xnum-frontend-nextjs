import style from "./UserCard.module.css";

const carLogoMap = {
    xnum: "/logo/logo_black.ico",
    tesla: "/car-logo/tesla/tesla-red.png",
    kia: "/car-logo/kia/kia.png"
}

export default function UserCard({ car = "xnum", message = "잠시 주차중 입니다.", number = "" }) {
    const logoSrc = carLogoMap[car];

    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={`${style.card} ${style.digital} ${style.two}`}>
                    <div className={style['card-on']}>
                        <div className={style['card-logo-img']}>
                            <img src={logoSrc}/>
                        </div>
                        <p style={{ marginTop: "60px", fontSize: "20px", fontWeight: "700" }}>
                            {message}
                        </p>
                        <p style={{ marginTop: "80px", fontSize: "18px", fontWeight: "600" }}>
                            {number}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}