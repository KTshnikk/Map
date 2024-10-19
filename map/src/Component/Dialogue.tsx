import React, { FC, useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';    // Тема PrimeReact
import 'primereact/resources/primereact.min.css';             // Основные стили PrimeReact
import 'primeicons/primeicons.css';                           // Иконки PrimeIcons
import 'primeflex/primeflex.css';                             // CSS Flex от PrimeReact (если нужно)
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const Dialogue: FC = () => {

  const [isDialogueActive, setDialogueActive] = useState<boolean>(false);
  
  const openDialogue = () => {
    setDialogueActive(true);
  }

  const closeDialogue = () => {
    setDialogueActive(false);
  }

  return (
    <div className="App">
      {/* Кнопка для открытия диалога */}
      <Button label="Открыть диалог" onClick={openDialogue} />
      
      {/* Диалоговое окно */}
      <Dialog header="Форма" visible={isDialogueActive} style={{ width: "50vw" }} onHide={closeDialogue}>
        <div> Это содержимое диалогового окна </div>
        <Button label="Закрыть" onClick={closeDialogue} />
      </Dialog>
    </div>
  );
}

export default Dialogue;