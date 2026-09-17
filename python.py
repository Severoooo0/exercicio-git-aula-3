# Calculadora de IMC - Python

peso = float(input("Digite seu peso em kg: "))
altura = float(input("Digite sua altura em metros: "))

imc = peso / (altura ** 2)

if imc < 18.5:
    classificacao = "abaixo do peso"
elif imc < 25:
    classificacao = "normal"
elif imc < 30:
    classificacao = "sobrepeso"
else:
    classificacao = "obesidade"

print(f"IMC: {imc:.2f}")
print(f"Classificação: {classificacao}")
