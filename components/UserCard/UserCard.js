import style from "./UserCard.module.css";

export default function UserCard() {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={`${style.card} ${style.digital} ${style.two}`}>
                    <div className={style['card-top']}>
                        <img
                            src="/car-logo/tesla/tesla-red.png"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className={style['card-mid']}>
                        <p>잠시 주차중 입니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}