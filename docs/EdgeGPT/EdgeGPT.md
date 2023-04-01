<a id="EdgeGPT"></a>

# EdgeGPT

Main.py

<a id="EdgeGPT.append_identifier"></a>

#### 追加标识符

```python
def append_identifier(msg: dict) -> str
```

将特殊字符附加到消息末尾以标识消息结尾

<a id="EdgeGPT.ChatHubRequest"></a>

## ChatHubRequest 对象

```python
class ChatHubRequest()
```

ChatHub 的请求对象

<a id="EdgeGPT.ChatHubRequest.update"></a>

#### 更新

```python
def update(prompt: str,
           conversation_style: CONVERSATION_STYLE_TYPE,
           options: list | None = None) -> None
```

更新请求对象

<a id="EdgeGPT.Conversation"></a>

## Conversation 对象

```python
class Conversation()
```

Conversation 的 API

<a id="EdgeGPT.ChatHub"></a>

## ChatHub 对象

```python
class ChatHub()
```

Chat 的 API

<a id="EdgeGPT.ChatHub.ask_stream"></a>

#### 流式询问

```python
async def ask_stream(
    prompt: str,
    conversation_style: CONVERSATION_STYLE_TYPE = None
) -> Generator[str, None, None]
```

问 bot 问题

<a id="EdgeGPT.ChatHub.close"></a>

#### 关闭

```python
async def close()
```

关闭连接

<a id="EdgeGPT.Chatbot"></a>

## Chatbot 对象

```python
class Chatbot()
```

结合一切，使其无缝衔接

<a id="EdgeGPT.Chatbot.ask"></a>

#### 询问

```python
async def ask(prompt: str,
              conversation_style: CONVERSATION_STYLE_TYPE = None) -> dict
```

问 bot 问题

<a id="EdgeGPT.Chatbot.ask_stream"></a>

#### 流式询问

```python
async def ask_stream(
    prompt: str,
    conversation_style: CONVERSATION_STYLE_TYPE = None
) -> Generator[str, None, None]
```

问 bot 问题

<a id="EdgeGPT.Chatbot.close"></a>

#### 关闭

```python
async def close()
```

关闭连接

<a id="EdgeGPT.Chatbot.reset"></a>

#### 重置

```python
async def reset()
```

重置 conversation

<a id="EdgeGPT.get_input_async"></a>

#### 异步获取输入

```python
async def get_input_async(session: PromptSession = None,
                          completer: WordCompleter = None) -> str
```

多行输入功能

<a id="EdgeGPT.main"></a>

#### 主函数

```python
async def main()
```

主要的函数

