import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ModalState } from './type'
import { TextArea } from '@ui/textarea'
import { Cover } from '@ui/cover'
import { CloseButton } from '@ui/close-button'
import { appear } from '@ui/appear-animate'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { fireStore } from 'configs/firebase'
import { Avatar } from '@ui/avatar'

export const Modal: React.FC<ModalState> = (props) => {
    const [text, setText] = React.useState<string>('')
    const [active, setActive] = React.useState<boolean>(false)

    const saveTask: React.MouseEventHandler<HTMLButtonElement> = async () => {
        await updateDoc(doc(fireStore, 'tasks', props.id), {
            text,
        })
        setActive(false)
    }
    const onDelete = async () => {
        await deleteDoc(doc(fireStore, 'tasks', props.id))
    }

    React.useEffect(() => {
        !props?.text && setActive(true)
    }, [props.text])

    return (
        <ModalView>
            <Dialog>
                <Cover color={props.color} height="70px" />
                <TopWrapper>
                    <Title>{props?.title}</Title>
                    <CloseButton onClose={props.onClick} />
                </TopWrapper>
                <Info>
                    Создано: <strong>{props.date}</strong>
                </Info>
                <Info>
                    <Avatar src={props.photoURL} width="30" />
                    <strong>{props.displayName}</strong>
                </Info>
                <Wrapper>
                    {!active ? (
                        <Description>{props?.text}</Description>
                    ) : (
                        <TextArea
                            rows={4}
                            value={text}
                            getValue={setText}
                            placeholder="Введите описание"
                        />
                    )}
                    <Icon>
                        <Svg
                            onClick={() => setActive(false)}
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path>
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                        </Svg>
                        <Svg
                            onClick={() => setActive(true)}
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                        </Svg>
                    </Icon>
                </Wrapper>
                <Wrapper>
                    <Button onClick={onDelete}>Удалить задачу</Button>
                    <Button color="#54bb63" onClick={saveTask}>
                        Сохранить задачу
                    </Button>
                </Wrapper>
            </Dialog>
        </ModalView>
    )
}

const ModalView = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    animation-name: ${appear};
    animation-duration: 300ms;
`
const slide = keyframes`
    from {
    transform: translateY(-150px);
  }
    to {
    transform: translateY(0);
  }
`
const Dialog = styled.div`
    width: calc(100vw - 500px);
    background: white;
    position: relative;
    margin: 0 20px;
    height: 500px;
    text-align: left;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: ${slide};
    animation-duration: 0.5s;
`
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 50px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`
const TopWrapper = styled(Wrapper)`
    margin-top: 90px;
    margin-bottom: 15px;
`
const Title = styled.div`
    font-weight: 700;
    line-height: 36px;
    font-size: 28px;
`
const Icon = styled.div`
    height: 100%;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Info = styled.div`
    font-size: 14px;
    display: flex;
    gap: 6px;
    align-items: center;
    font-weight: 400;
    color: grey;
    margin-left: 50px;
    margin-bottom: 10px;
`
const Description = styled.div`
    width: 100%;
    border: 1px solid var(--light-grey);
    height: fit-content;
    padding: 20px;
`
const Button = styled.button<{ color?: string }>`
    border-radius: 5px;
    border: 1px solid;
    border-color: ${(props) => props.color ?? '#ce3e3e'};
    background-color: #fff;
    color: ${(props) => props.color ?? '#ce3e3e'};
    width: 150px;
    height: 42px;
    margin-top: 40px;
    transition: all 0.5s ease-out;
    &:hover {
        background-color: ${(props) => props.color ?? '#ce3e3e'};
        color: #fff;
    }
`
const Svg = styled.svg`
    cursor: pointer;
`
