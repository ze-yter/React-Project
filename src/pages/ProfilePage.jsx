import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    const navigate = useNavigate();

    return (
        <div className="content">
            <div className="profile-page">
                <div className="profile-data">
                    <div className="profile-field">
                        <input type="text" placeholder="Логин" className="type-2" />
                        <input type="text" placeholder="Email" className="type-2" />
                        <input type="text" placeholder="Фамилия" className="type-2" />
                        <input type="text" placeholder="Имя" className="type-2" />
                        <input type="text" placeholder="Телефон" className="type-2" />
                        <input type="text" placeholder="Адрес" className="type-2" />
                    </div>
                    <button className="save-button margin-but-pr">
                        <span>Сохранить</span>
                    </button>
                </div>

                <div>
                    <div className="profile-pic logo-border">
                        <img className="user-logo margin-icon" width={120} height={120} src="/images/user.jpeg" alt="Profile" />
                        <div>
                            <button className="save-button margin-but-pic">
                                <span>Изменить фото профиля</span>
                            </button>
                            <button className="save-button margin-but-pic">
                                <span>Сохранить</span>
                            </button>
                        </div>
                    </div>

                    <div className="profile-card profile-data">
                        <div className="green-card">
                            <div className="card-object profile-field">
                                <form>
                                    <input type="text" placeholder="Номер карты" className="type-2" />
                                    <input type="text" placeholder="Фамилия и Имя" className="type-2" />
                                    <div className="half">
                                        <input type="text" placeholder="MM/YY" className="type-2" />
                                        <input type="password" placeholder="CVC" className="type-2" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button className="save-button margin-but-pic">
                            <span>Сохранить</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="profile-page">
                <button className="profile-exit margin-but-pic" onClick={() => {
                    localStorage.clear();

                    const auth = getAuth();
                    signOut(auth).then(() => {
                        navigate("/login", { replace: true });
                    }).catch((error) => {
                        // An error happened.
                    });
                }}>
                    <span>Выйти из профиля</span>
                </button>
            </div>
        </div>
    );
}