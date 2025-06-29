import style from "./UserCard.module.css";

export default function UserCard() {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={`${style.card} ${style.digital} ${style.two}`}>
                    <div className={style['card-on']}>
                        <img src="/car-logo/tesla/tesla-red.png" />
                        <p style={{ marginTop: "60px", fontSize: "20px", fontWeight: "700" }}>
                            잠시 주차중 입니다.
                        </p>
                        <p style={{ marginTop: "80px", fontSize: "18px", fontWeight: "600" }}>
                            0502-1234-1234
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}