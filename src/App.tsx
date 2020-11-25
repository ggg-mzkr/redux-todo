import React from 'react';
import { useDispatch } from "react-redux";
import { useTodoState } from "./ducks/todo/selectors";
import { Button, ButtonGroup, Card, Col, Container, Form, Row} from "react-bootstrap";
import { Todo } from "./ducks/todo/types";
import { addTodo, deleteTodo, toggleTodo } from "./ducks/todo/operations";

const App = () => {

    const dispatch = useDispatch();
    const todoState = useTodoState();

    const add = () => () => {
        const todo: Todo = {
            id: 0,
            title: (document.getElementById('title') as HTMLInputElement).value,
            content: (document.getElementById('content') as HTMLInputElement).value,
            done: false,
        }
        dispatch(addTodo(todo))
    }

    const deleteTodoItem = (id: number) => () => dispatch(deleteTodo(id))

    const toggle = (id: number) => () => dispatch(toggleTodo(id))

    const MayDel = (props: {isDel: boolean, content: any}) => {
        if (props.isDel) {
            return <del>{props.content}</del>
        }
        return <span>{props.content}</span>
    }


    const todoList = todoState.todoList.map((todo) => (
        <Card key={todo.id} className="mb-3">
            <Card.Header>
                <div className="d-flex justify-content-between">
                    <MayDel isDel={todo.done} content={todo.title} />
                    <ButtonGroup>
                        <Button size="sm" variant="secondary" onClick={toggle(todo.id)}>完了</Button>
                        <Button size="sm" variant="danger" onClick={deleteTodoItem(todo.id)}>削除</Button>
                    </ButtonGroup>
                </div>
            </Card.Header>
            <Card.Body>
                <p><MayDel isDel={todo.done} content={todo.content} /></p>
            </Card.Body>
        </Card>
    ))

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    {todoList}
                </Col>
            </Row>

            <hr />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="title">
                                    <Form.Label>タイトル</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group controlId="content">
                                    <Form.Label>内容</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="primary" type="button" onClick={add()} block>登録</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default App;
