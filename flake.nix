{
  description = "A Markdown editor";

  inputs = { nixpkgs.url = "github:nixos/nixpkgs/release-21.11"; };

  outputs = { nixpkgs, ... }: {
    devShell.aarch64-darwin = let
    pkgs = nixpkgs.legacyPackages.aarch64-darwin;
    in pkgs.mkShell {
      packages = [
        pkgs.nodejs
        pkgs.nodePackages.typescript-language-server
        pkgs.sass
      ];
    };
  };
}
