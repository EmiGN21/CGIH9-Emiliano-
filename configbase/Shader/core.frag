#version 330 core
in vec3 shaderColor;

out vec4 color;

void main()
{
	color = vec4(shaderColor, 1.0f);
}
