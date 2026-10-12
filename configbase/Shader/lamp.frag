#version 330 core
in vec3 shaderColor;
in vec2 TexCoords;

out vec4 FragColor;

uniform sampler2D texture1;

void main()
{
    vec4 texColor = texture(texture1, TexCoords);
    if (texColor.a < 0.1)
        discard;
    FragColor = vec4(texColor.rgb * shaderColor, texColor.a);
}
