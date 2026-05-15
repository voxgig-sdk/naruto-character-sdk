package core

type NarutoCharacterError struct {
	IsNarutoCharacterError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNarutoCharacterError(code string, msg string, ctx *Context) *NarutoCharacterError {
	return &NarutoCharacterError{
		IsNarutoCharacterError: true,
		Sdk:              "NarutoCharacter",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NarutoCharacterError) Error() string {
	return e.Msg
}
