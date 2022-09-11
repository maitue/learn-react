import { useEffect, useState } from "react";

function PageViewAvatar() {
    const [avatar, setAvatar] = useState()
    useEffect(()=>{
        return () => {
           avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePageviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (  
        <div>
            <input type="file" 
                   onChange={handlePageviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt=""/>
            )}
        </div>
        
    );
}

export default PageViewAvatar;