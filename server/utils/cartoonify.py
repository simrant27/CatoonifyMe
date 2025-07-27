from PIL import Image
import torch
import torchvision.transforms as transforms
import os
from model_definition import UNetGenerator

# Load model
model = UNetGenerator()
model.load_state_dict(torch.load("./model/generatorfinal100.pth", map_location=torch.device('cpu')))
model.eval()

def cartoonify_image(image_path, filename):
    image = Image.open(image_path).convert("RGB")
    transform = transforms.Compose([
        transforms.Resize((256, 256)),
        transforms.ToTensor(),
        transforms.Normalize([0.5]*3, [0.5]*3)  # Match training
    ])
    input_tensor = transform(image).unsqueeze(0)

    with torch.no_grad():
        output_tensor = model(input_tensor)[0]

    # Convert [-1,1] back to [0,1]
    output_tensor = (output_tensor * 0.5) + 0.5
    output_image = transforms.ToPILImage()(output_tensor)

    output_path = os.path.join("outputs", "cartoon_" + filename)
    output_image.save(output_path)
    return output_path
