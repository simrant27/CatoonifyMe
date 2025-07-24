import torch
import json
import os

def save_checkpoint(path, generator, discriminator, g_optimizer, d_optimizer, epoch):
    torch.save({
        'generator': generator.state_dict(),
        'discriminator': discriminator.state_dict(),
        'g_optimizer': g_optimizer.state_dict(),
        'd_optimizer': d_optimizer.state_dict(),
        'epoch': epoch
    }, path)

def load_checkpoint(path, generator, discriminator, g_optimizer, d_optimizer, device):
    checkpoint = torch.load(path, map_location=device)
    generator.load_state_dict(checkpoint["generator"])
    discriminator.load_state_dict(checkpoint["discriminator"])
    g_optimizer.load_state_dict(checkpoint["g_optimizer"])
    d_optimizer.load_state_dict(checkpoint["d_optimizer"])
    return checkpoint["epoch"]

def load_losses(filepath):
    if os.path.exists(filepath):
        with open(filepath, "r") as f:
            data = json.load(f)
        return data.get("g_losses", []), data.get("d_losses", []), data.get("d_accuracies", [])
    return [], [], []

def save_losses(filepath, g_losses, d_losses, d_accuracies):
    with open(filepath, "w") as f:
        json.dump({
            "g_losses": g_losses,
            "d_losses": d_losses,
            "d_accuracies": d_accuracies
        }, f)
